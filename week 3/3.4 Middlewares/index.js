const express=require('express')
const app=express()

app.use(express.json());
function ticketChecker(req,res,next){
    const ticket=req.body.ticket;
    if(ticket == 'free'){
      
        next()
    }
    else{
        res.status(403).json({
            msg:'access denied',ticket
        })
        console.log(ticket);
    }

}
app.get('/ride',ticketChecker,(req,res)=>{
res.send('hey you have ride the first ride')
})
app.listen(3000,()=>{
    console.log('app lis listening on port 3000');
})