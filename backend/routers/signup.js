const express=require('express');
const database = require('./database');
const router=express.Router();

router.post('/',(req,res) =>{
    const {fname,lname,uname,email,password,dob,phone}=req.body
    const sql="INSERT INTO users (id,first_name,last_name,user_name,email,password,date_of_birth,phone_number) VALUES (?,?,?,?,?,?,?,?) ";
    const email_check="SELECT email from users where email in (?)";
    const id_num="SELECT id from users ORDER BY id DESC LIMIT 1";
    database.query(id_num,(err,r)=>{
      console.log(r[0].id+1)
      const id=r[0].id+1
      database.query(email_check,[email],(err,result)=>{
        console.log(result)
        if (result.length==0){
          console.log("Email is not there")
          database.query(sql,[id,fname,lname,uname,email,password,dob,phone],(err,result) => {
            console.log(err);
            if (err) return res.json({ Message: "Error" });
            else return res.json({ Status: "Success" });
          })
          
        }
        else{
          return res.json({Status:"Unsuccess"})
        }
      })
    })
  })

module.exports=router