# Control Flow

### 1. Initialize the Project
```sh
npm init -y
npm install express zod body-parser mongoose cors jsonwebtoken
```

### 2. Folder Structure
```
backend
│   index.js
├── db
│   └── connection.js
│   └── models.js
├── middleware
│   └── authMiddleware.js
├── router
│   └── user.js
│   └── account.js
└── config.js
```

### 3. Database Connection and Models (db/connection.js and db/models.js)
**db/connection.js**
```js
const mongoose = require('mongoose');

mongoose.connect('//url');

mongoose.connection.on('connected', () => {
    console.log('Database connected');
});

module.exports = mongoose;
```

**db/models.js**
```js
const mongoose = require('./connection');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstname: {
        type: String,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        trim: true,
        maxLength: 50
    }
});

const AccountSchema = new mongoose.Schema({
    amount: Number,
    userId: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    }
});

const User = mongoose.model('User', UserSchema);
const Account = mongoose.model('Account', AccountSchema);

module.exports = { User, Account };
```

### 4. Middleware (middleware/authMiddleware.js)
```js
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ msg: 'Unauthorized' });
    }
    const token = authorization.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).send({ msg: 'Invalid token' });
    }
}

module.exports = authMiddleware;
```

### 5. User Routes (router/user.js)
```js
const { Router } = require('express');
const { User, Account } = require('../db/models');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const zod = require('zod');
const authMiddleware = require('../middleware/authMiddleware');

const router = Router();

const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),
});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

const updateBody = zod.object({
    username: zod.string().email().optional(),
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
});

router.post('/signup', async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).send({ msg: 'Please provide valid credentials' });
    }

    const { username, firstname, lastname, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(411).json({ msg: "Username already taken" });
    }

    const newUser = await User.create({ username, firstname, lastname, password });
    const userId = newUser._id;
    await Account.create({ userId, amount: 100 + Math.random() * 1000000 });
    const token = jwt.sign({ userId }, JWT_SECRET);

    res.status(200).send({ msg: 'User created successfully', newUser, token });
});

router.post('/signin', async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({ msg: "Please provide valid credentials" });
    }

    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
        return res.status(411).send({ msg: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.status(200).send({ msg: 'User signed in successfully', token });
});

router.put('/update', authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({ msg: 'Provide valid inputs' });
    }

    const updatedUser = await User.updateOne({ _id: req.userId }, req.body);
    res.status(200).json({ msg: "User updated successfully", updatedUser });
});

router.get('/users/:firstname', async (req, res) => {
    const { firstname } = req.params;
    const users = await User.findOne({ firstname });
    res.status(200).json({ msg: "User found:", users });
});

router.get('/bulk', async (req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [
            { firstname: { "$regex": filter } },
            { lastname: { "$regex": filter } }
        ]
    });

    res.json({
        users: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    });
});

module.exports = router;
```

### 6. Account Routes (router/account.js)
```js
const { Router } = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const { User, Account } = require('../db/models');
const mongoose = require('mongoose');

const router = Router();

router.get('/', authMiddleware, async (req, res) => {
    try {
        const { userId } = req.body;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid user ID' });
        }

        const account = await Account.findOne({ userId });
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }

        res.status(200).json({ msg: 'Balance is:', balance: account.amount });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/balance', authMiddleware, async (req, res) => {
    try {
        const { userId } = req.body;
        const account = await Account.findOne({ userId });
        res.status(200).json({ msg: 'Balance is:', balance: account.amount });
    } catch (error) {
        console.log(error);
    }
});

router.post('/transfer', authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    const { amount, to } = req.body;
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.amount < amount) {
        await session.abortTransaction();
        return res.status(400).json({ message: "Insufficient balance" });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({ message: "Invalid account" });
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { amount: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { amount: amount } }).session(session);

    await session.commitTransaction();
    res.json({ message: "Transfer successful" });
});

module.exports = router;
```

### 7. Main Server File (index.js)
```js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db/connection');
const userRouter = require('./router/user');
const accountRouter = require('./router/account');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/amount', accountRouter);

app.listen(3000, () => {
    console.log('App is running on port 3000');
});
```

### 8. Configuration File (config.js)
```js
module.exports = {
    JWT_SECRET: 'your_jwt_secret'
};
```

