const express = require('express');
const conectarDB = require('./config/DB')

const app = express();

conectarDB();

app.use(express.json());

app.use('/api/ingresos', require('./routes/ingreso'));
app.use('/api/gastos', require('./routes/ingreso'));

app.listen(4000, () =>{
  console.log('el servidor esta corriendo');
})