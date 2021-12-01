const express = require('express');
const router = express.Router();
const ingresoController = require('../controllers/ingresoController');

router.get('/', ingresoController.obtenerServicios);

module.exports = router;