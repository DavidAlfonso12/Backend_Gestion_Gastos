const express = require('express');
const router = express.Router();
const ingresoConsulta = require('../controllers/ingresoController');

router.post('/', ingresoConsulta.obtenerConsulta);

module.exports = router;