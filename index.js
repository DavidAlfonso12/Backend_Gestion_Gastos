const express = require('express');
const conectarDB = require('./config/DB');
const cors = require("cors");

const app = express();

conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/ingresos',require('./routes/ingreso'));
app.use('/api/gastos',require('./routes/gastos'));
app.use('/api/servicios',require('./routes/servicios'));


app.listen(4000, () =>{
  console.log('el servidor esta corriendo');
})