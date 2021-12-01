const express = require('express');
const router = express.Router();
const ingresoController = require('../controllers/ingresoController');

router.post('/', ingresoController.crearIngreso);
router.get('/', ingresoController.obtenerIngresos);

module.exports = router;  