const express=require('express');
const database = require('./database');
const router=express.Router();


router.get('/:id', (req, res) => {
    const { id } = req.params
    const sql = "select * from products where id=?";
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
