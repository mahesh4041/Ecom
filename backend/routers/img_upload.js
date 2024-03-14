const express=require('express');
const database = require('./database');
const router=express.Router();
const multer = require('multer')
const path=require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    },
  });
  
  const upload = multer({
    storage: storage,
  })
  
  
router.post('/', upload.array('image'), (req, res) => {
    const picture = req.files.map((file) => (file.filename)).toString();
    console.log(picture)
    console.log(req.body)
    const { name, price, discription,stock } = req.body;
    const sql = "INSERT INTO products (name,price,description,image,stock) VALUES (?,?,?,?,?)"
    database.query(sql, [name, price, discription, picture, stock], (err, result) => {
      console.log(err);
      if (err) return res.json({ Message: "Error" });
      else return res.json({ Status: "Success" });
    })
  })

module.exports=router