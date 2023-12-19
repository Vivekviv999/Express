const express = require("express");

const app = express();

app.use(express.json());

const port = 8081;

const toDoList = ["hey everyone", "hope u are all","doing good","and awesome at work"];

//  http://localhost:8081/todos
app.get("/todos" ,(req, res)=>{
    res.status(200).send(toDoList)
})

//  http://localhost:8081/todos
app.post("/todos",(req,res)=>{
    let newDoItem = req.body.item;
    toDoList.push(newDoItem);
    res.status(201).send({
        message: "The Task was added successfully"
    })
})

app.delete("/todos", (req,res)=>{
    var ItemToDelete = req.body.item;

    toDoList.find((elem, index)=>{
        if(elem === ItemToDelete){
            toDoList.splice(index,1)
        }
    })
    res.status(204).send({
        message: 'Deleted item ${req.body.item}'
    })
})

//Put Patch
app.all("/todos",(req,res)=>{
    res.status(501).send({
        message:"not yet implemented"
    })
})

app.all("*", (req,res)=>{
    res.status(404).send({
        message:"default url"
    })
})

app.listen(port, ()=>{
    console.log("node.js with express started running successfully on port ${port}")
})