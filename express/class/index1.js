const express=require("express")
const app=express()

app.get('/health-checkup',function(req,res){
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyId=req.query.kidneyId

    if(!(username==='kushagra' || password==='pass')){
        res.status(400).json({"msg": "something is up wiht your inputs"})
        return
    }

    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({"msg": "something is up wiht your inputs"})
        return
    }
    
    res.json({
        msg :"your kidney is fine"
    })
});

app.listen(3000);