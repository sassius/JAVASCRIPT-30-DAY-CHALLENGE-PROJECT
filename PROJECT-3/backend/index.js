const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")// Ensure the path points to your db.js file
const app = express();


app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
    const createpayload = req.body;
    const parsedpayload =createTodo.safeParse(createpayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
    await todo.create( {
        title : createpayload.title,
        description : createpayload.title,
        completed : false
    })
    res.json({
        msg:"todo created"
    })
})
app.get("/todos",async function(req,res){
    const todos = await todo.find({});
    
    res.json({todos})
})
app.put("/completed", async function(req,res){
    const updpatepayload =req.body;
    const parsedpayload =updateTodo.safeParse(updpatepayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
    }
    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo marked as completed"
    })
})
app.listen(3000);