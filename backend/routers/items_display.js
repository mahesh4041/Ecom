const express=require('express');
const database = require('./database');
const router=express.Router();

router.get('/', (req, res) => {
    const { id } = req.query
    const sql = "select * from products ";
    database.query(sql, [id], (err, result) => {
      if (err) {
        console.log(err)
        return res.json({ Message: "Error" });
      }
      else {
        console.log(result)
        return res.send(result)
      }
    })
  })

  module.exports=router