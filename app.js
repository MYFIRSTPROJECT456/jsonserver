'use strict';
const express = require('express')

const fs = require('fs');

// let rawdata = fs.readFileSync('db.json');  
// let student = JSON.parse(rawdata);  
// console.log(student);  

const app = express()

app.get('/', (req, res) => {
  let rawdata = fs.readFileSync('db.json');  
  let student = JSON.parse(rawdata); 
  res.send(student); 
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))