const express = require('express');

const app = express();

app.get('/', (req,res)=>{
        res.status(200).send({hi : "there!"});
})

app.listen(5000);