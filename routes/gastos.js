const express = require('express');
const router = express.Router();
const ingresoController = require('../controllers/ingresoController');

router.post('/', ingresoController.crearGasto);
router.get('/', ingresoController.obtenerGastos);

module.exports = router;