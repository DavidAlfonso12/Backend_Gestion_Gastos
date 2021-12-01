const mongoose = require('mongoose');

const IngresoSchema = mongoose.Schema({
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

module.exports = mongoose.model('Ingreso', IngresoSchema);  