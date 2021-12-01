const express = require('express');
const conectarDB = require('./config/DB')

const app = express();

conectarDB();

app.use(express.json());

app.use(require('./routes/ingreso'));


app.listen(4000, () =>{
  console.log('el servidor esta corriendo');
})