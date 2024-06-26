const { Router } = require("express");
const { authMiddleware } = require("../middlewares/authmiddleware");
const { User, Account } = require("../db");
const { default: mongoose } = require("mongoose");

const router=Router();

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

        res.status(200).json({
            msg: 'Balance is:',
            balance: account.amount
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});
router.get('/balance',authMiddleware, async(req,res)=>{

try {
    const{userId}=req.body;
    const account=await Account.findOne({userId});
res.status(200).json({
    msg:'Balance is:',balance:account.amount
})

} catch (error) {
    console.log(error);
}
})


router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;
    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
});
module.exports=router