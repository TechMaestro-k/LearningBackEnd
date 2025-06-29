const express=require("express");
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.json())

let todos=[]

app.get('/todos',function(req,res){
    res.json(todos)
})

app.get('/todos/:id',function(req,res){
    const todo = todos.find(t=>t.id ===parseInt(req.params.id))
    if(!todo){
        res.status(404).send()
    }
    else{
        res.json(todo)
    }
})

app.post('/todos',function(req,res){
    const newtodo={
        id : Math.floor(Math.random()* 100000),
        title : req.body.title,
        description : req.body.description
    }
    todos.push(newtodo)
    res.status(201).json(newtodo)
})

app.put('/todos/:id',function(req,res){
    const todoIndex=todos.findIndex(t=>t.id === parseInt(req.params.id))
    if(todoIndex===-1){
        res.status(404).send();
    }
    else{
        todos[todoIndex].title=req.body.title
        todos[todoIndex].description=req.body.description
        res.json(todos[todoIndex])
    }
})

app.delete('/todos/:id',function(req,res){
    const todoIndex=todos.findIndex(t => t.id === parseInt(req.params.id))
    if(todoIndex=== -1){
        res.status(404).send()
    }
    else{
        todos.splice(todoIndex,1)
        res.status(200).send()
    }
})

app.use((req,res,next)=>{
    res.status(404).send()
})

module.exports=app;