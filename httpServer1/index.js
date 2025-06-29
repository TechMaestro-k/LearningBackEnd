const express = require('express');
port = 3000;

const app=express();

app.get('/',function(req,res){
    res.send("hello world")
})

app.listen(port,function(){
    console.log(`Server is running on http://localhost:${port}`);})