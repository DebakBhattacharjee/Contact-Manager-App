const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

const port = process.env.PORT || 5001;


app.get('/api/contacts', (req, res)=>{
  res.json({message: "Get all contacts"});

});



app.listen(port, () =>{
  console.log('Server running on port ${port}');

});