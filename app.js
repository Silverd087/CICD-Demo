const express = require('express');
const app = express();

app.use(express.json());

app.get('/health',(req,res)=>{
    res.status(200).send({status:'OK'});
})

app.get('/users',(req,res)=>{
    res.status(200).json([
        {id:1,name:'John Doe'},
        {id:2,name:'Jane Doe'}
    ])
})

app.post('/users',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).send({error:'User name is required'});
    }
    res.status(201).json({id:3,name});
})

module.exports = app