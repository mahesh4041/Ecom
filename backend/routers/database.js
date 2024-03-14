const express=require('express')
const mysql = require('mysql')

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'ecommerce'
  });
  
  database.connect(function (err) {
    if (err) {
      console.log("Error while connecting" + err.stack)
      return;
    }
    else {
      console.log("connected")
    }
  })

module.exports=database