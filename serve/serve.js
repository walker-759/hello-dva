const express = require('express')
const app = express()
app.get('/users',(req,res)=>{
    res.json({
        name:'Walker'
    })
})
app.listen(5000,()=>{
    console.log('启动成功');
})