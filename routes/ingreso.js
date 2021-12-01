const express = require('express');
const router = express.Router();
const ingresoController = require('../controllers/ingresoController');

router.post('/', ingresoController.crearIngreso);
router.post('/api/gastos', ingresoController.crearGasto);
router.get('/', ingresoController.obtenerIngresos);
router.get('/api/gastos', ingresoController.obtenerGastos);

module.exports = router;  