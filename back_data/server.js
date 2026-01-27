const express = require("express");
const app = express();
app.use(express.json());
let itemproduct = [];
app.post('addproduct',(req,res)=>{
    const  newitems= req.body;
            itemproduct.push(newitems);
            res.status(201).json({
                message:"Product added.",
                items:newitems,
            })
})
app.get("/checkproduct",(req,res)=>{
    res.json(itemproduct);
})
const port = 8080;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})