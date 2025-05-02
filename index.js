const express = require('express');
const { resolve } = require('path');
const mongoose =require('mongoose')
require('dotenv').config();
const db=async () => {
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected")
}
catch(e){
  console.log("failed",e)
}
}
db()
const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
