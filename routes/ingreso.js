const express = require('express');
const router = express.Router();
const ingresoController = require('../controllers/ingresoController');

router.post('/api/ingresos', ingresoController.crearIngreso);
router.post('/api/gastos', ingresoController.crearGasto);
router.get('/', ingresoController.obtenerIngresos);
router.get('/', ingresoController.obtenerGastos);

module.exports = router;  