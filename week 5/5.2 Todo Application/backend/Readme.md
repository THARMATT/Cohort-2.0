# Control-Flow of todo backend

This project is a simple Todo backend application built with Node.js, Express, Zod, and MongoDB. Below is the control flow for setting up and running the application.

## Setup Instructions

### 1. Initialize `package.json`

Initialize a new Node.js project:

```bash
npm init -y
```

### 2. Install Dependencies

Install the required dependencies:

```bash
npm install express body-parser mongoose mongodb zod
```

### 3. Create Folder Structure

Create the following folder structure:

```
.
├── db
│   └── index.js
├── routes
│   └── todoRoute.js
├── types.js
└── index.js
```

### 4. Database Connection

Create a `index.js` file inside the `db` folder to connect to the MongoDB database and define the schema:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoApp');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = { Todo };
```

### 5. Zod Validation

Create a `types.js` file to define Zod validation schemas:

```javascript
const zod = require('zod');

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
});

const updateTodo = zod.object({
    id: zod.string()
});

module.exports = { createTodo, updateTodo };
```

### 6. Define Routes

Create a `todoRoute.js` file inside the `routes` folder to define the routes:

```javascript
const { Router } = require('express');
const { createTodo } = require('../types');
const { Todo } = require('../db');
const router = Router();

router.post('/todo', async (req, res) => {
    const todopayload = req.body;
    const parsepayload = createTodo.safeParse(todopayload);
    if (!parsepayload.success) {
        return res.status(402).json({
            msg: 'You sent the wrong inputs'
        });
    }
    const { title, description } = todopayload;
    const newTodo = await Todo.create({ title, description });
    res.status(200).json({
        msg: "Todo created successfully", newTodo
    });
});

router.get('/todo', async (req, res) => {
    const todos = await Todo.find({});
    res.status(200).json({
        msg: 'Todos fetched successfully', todos
    });
});

router.put('/todo/:todoId', async (req, res) => {
    const { todoId } = req.params;
    const { title, description } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, { title, description }, { new: true, runValidators: true });
    res.status(200).json({
        msg: 'Todo updated successfully', updatedTodo
    });
});

router.delete('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json({
        msg: "Todo deleted successfully", deletedTodo
    });
});

module.exports = router;
```

### 7. Main Application File

Create the main `index.js` file to set up the Express server:

```javascript
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const todoRouter = require('./routes/todoRoute');

app.use(bodyparser.json());
app.use('/', todoRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
```

### 8. Run the Application

Use `nodemon` to run the application:

```bash
nodemon index.js
```
