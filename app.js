const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const routes=require('./routes');

const http=require('http');
const fs=require('fs');

app.use(bodyParser.urlencoded({extended:true}))
   app.use('/add-product',routes)
//  

app.use('/product',(req,res)=>{
    console.log(req.body);
   
   res.redirect('/add-product');

})




app.use('/',(req,res,next)=>{
   
    res.send("<h1>Hello to express</h1>");
   
})
const server=http.createServer(app);
server.listen(8080);