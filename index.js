const express = require('express');
const { resolve } = require('path');
const mongoose =require('mongoose')
const db=async () => {
  try{
  await mongoose.connect(`mongodb+srv://sambabupolimetla:root@cluster0.xxyl1.mongodb.net/sam?retryWrites=true&w=majority&appName=Cluster0`)
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
