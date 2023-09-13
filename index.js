const express=require("express");
const app=express();
const PORT=8001;
const cors=require("cors");
app.use(cors());
app.use(express.json());

app.get("/add",(req,res)=>{
     const num1=parseInt(req.query.num1);
     const num2=parseInt(req.query.num2);
     var sum=num1+num2;
    res.status(200).send(`your sum is ${sum}`);
})

app.listen(PORT,()=>{
    console.log("odudhu odudhu");
})