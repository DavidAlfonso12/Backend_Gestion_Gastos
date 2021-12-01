const mongoose = require('mongoose');

const ServiciosSchema = mongoose.Schema({
  nombre:{
    type: String,
    require: true
  }
});

module.exports = mongoose.model('servicios', ServiciosSchema);  