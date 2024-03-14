const express=require('express');
const database = require('./database');
const router=express.Router();

router.post('/',(req,res)=>{
    console.log(req.body)
    const {email,password}=req.body;
    const sql = "SELECT * from users where user_name=? or email=?";
    database.query(sql,[email,email],(err,result)=>{
  
      console.log(result)
      if (err) return res.json({ Message: "Error" });
      else{
        if (result.length==0){
          return res.json({Status:"Unsuccess",msg:"Account not found please signup"})
        }
        else{
          if (result[0].password===password){
            return res.json({Status:"Success",user:result[0]})
          }
          else{
            return res.json({Status:"Unsuccess",msg:"Incorrect Password"})
          }
        }
        
      }
    })
  })

  module.exports=router