const express=require('express');
const bodyParser=require('body-parser');
const fs= require('fs');
const { parse } = require('path');

const app=express()

app.use(express.json())

function findIndex(arr,id){
    for(let i=0;i<arr.length;i++){
        if(arr[i].id === id) return i;
    }
    return -1;
}

function removeAtIndex(arr,index){
    arr.splice(index,1);
    return arr;
}

app.get('/todos',function(req,res){
    fs.readFile('todos.json','utf-8',function(err,data){
        if(err) throw err;
        res.json(JSON.parse(data))
    })
})

app.get('/todos/:id',(req,res)=>{
    fs.readFile('todos.json','utf-8',function(err,data){
        if(err) throw err;
        const todos=JSON.parse(data);
        const todoIndex=findIndex(todos,parseInt(req.params.id))
        if(todoIndex===-1) return res.status(404).send()
        else res.json(todos[todoIndex])
    })
})

app.post('/todos',(req,res)=>{
    const newtodo={
        id:Math.floor(Math.random()* 100000),
        title: req.body.title,
        description: req.body.description
    }
    fs.readFile('todos.json','utf-8',function(err,data){
        if(err) throw err;
        const todo=JSON.parse(data)
        todo.push(newtodo);
        fs.writeFile('todos.json',JSON.stringify(todo),(err)=>{
            if(err) throw err
            res.status(201).json(newtodo)
        })
    })
})

app.put('/todos/:id',(req,res)=>{
    fs.readFile('todos.json','utf-8',(err,data)=>{
        if(err) throw err;
        const todos=JSON.parse(data)
        const todoIndex=findIndex(arr,parseInt(req.params.id));
        if(todoIndex===-1) return res.status(404).send()
        else
        {
            const updatedtodo={
                id: todos[todoIndex].id,
                title: req.body.title,
                description: req.body.description
            }
        }
        todos[todoIndex]=updatedtodo
        fs.writeFile('todos.json',JSON.stringify(todos),(err)=>{
            if(err) throw err
            res.status(200).json(updatedtodo)
        })
    })
})

app.delete('/todos/:id',(req,res)=>{
    fs.readFile('todos.json','utf-8',(err,data)=>{
        if(err) throw err;
        const todos=JSON.parse(data)
        const todoIndex=findIndex(todos,parseInt(req.params.id))
        if(todoIndex===-1) return res.status(404).send()
        else{
            todos=removeAtIndex(todos,todoIndex)
            fs.writeFile('todos.json',JSON.stringify(todos),(err)=>{
                if(err) throw err
                res.status(200).send()
            })
        }
    })
})

app.use((req,res,next)=>{
    res.status(404).send()
})

module.exports=app