const mongoose = require('mongoose');

const ConsultaSchema = mongoose.Schema({
  fecha:{
    type: Date,
    require: true
  }
});

module.exports = mongoose.model('consulta', ConsultaSchema);  