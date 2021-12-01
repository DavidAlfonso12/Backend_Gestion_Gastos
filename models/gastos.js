const mongoose = require('mongoose');

const GastosSchema = mongoose.Schema({
  nombre:{
    type: String,
    require: true
  },
  fecha:{
    type: Date,
    require: true
  },
  valor:{
    type: Number,
    require: true
  } 
});

module.exports = mongoose.model('gastos', GastosSchema);  