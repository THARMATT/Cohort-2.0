const { Router } = require("express");
const {  Card } = require("../db");

 const router=Router()

 router.post('/cards',async(req,res)=>{
    const{name,description,interest}=req.body;
    const card=await Card.create({
        name,description,interest
    })
    res.status(200).json({
        msg:'Card is created successfully',card
    })

 });
 router.get('/cards',async(req,res)=>{
    const cards=await Card.find({});
    res.status(200).json({
        msg:'Cards are fetched succesfully',cards
    })
 })

 router.put('/cards/:cardId',async(req,res)=>{
const{cardId}=req.params;
const {name,description,interest}=req.body;
const updatedCard=await Card.findByIdAndUpdate(cardId,{name,description,interest});
res.status(200).json({
    msg:'Cards is updated successfully',updatedCard
})
 })
 router.delete('/cards/:cardId',async(req,res)=>{
    const {cardId}=req.params;
   const deletedCard= await Card.findByIdAndDelete(
        cardId
    )
    console.log(cardId);
    res.send({
        msg:"Card is deleted Successfully",deletedCard
    })
 })
 module.exports=router