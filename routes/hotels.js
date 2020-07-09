const express=require('express');
const router=express.Router();
const mysql=require('mysql');


//create connection
const db=mysql.createConnection({
    host:'localhost',
    user:'smn20',
    password:'200199Rsp!@',
    database:'hoteldb'
})

//add hotel
/*router.get('/addhotel',(req,res)=>{
    let hotel={name:'hotel one',description:'this is post number one'};
    let sql='INSERT INTO post SET?';
    let query=db.query(sql,post,(err,result)=>{
      if(err){
          throw err;
      }
      console.log(result);
      res.send('the first hotel is added!')
    })
})*/


//get all the most popular hotels:PUBLIC
router.get('/mostpopular',(req,res)=>{
    let sql='SELECT * FROM mostpopular';
    let query=db.query(sql,(err,result)=>{
      if(err){
          throw err;
      }
      console.log(result);
      res.send('most popular hotels fetched');
    })
})


//get one hotel:PUBLIC
router.get('/gethotel/:id',(req,res)=>{
    let sql=`SELECT * FROM mostpopular WHERE id=${req.params.id}`;
    let query=db.query(sql,(err,result)=>{
      if(err){
          throw err;
      }
      console.log(result);
      res.send('hotel found');
    })
})

module.exports=router;