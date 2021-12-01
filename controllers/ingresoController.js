const Ingreso = require('../models/Ingreso');
const Gastos = require('../models/gastos');
const Servicios = require('../models/Servicios');

exports.crearIngreso = async (req, res) => {
  
  try {
    let ingreso;

    ingreso = new Ingreso(req.body);

    await ingreso.save();
    res.send(ingreso);
    
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}
exports.crearGasto = async (req, res) => {
  
  try {
    let gastos;

    gastos = new Gastos(req.body);

    await gastos.save();
    res.send(gastos);
    
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

exports.obtenerIngresos = async (req, res) =>{

  try {
    const ingresos = await Ingreso.find();
    res.json(ingresos);
    
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }

}

exports.obtenerGastos = async (req, res) =>{

  try {
    const gastos = await Gastos.find();
    res.json(gastos);
    
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }

}

exports.obtenerServicios = async (req, res) =>{

  try {
    const servicios = await Servicios.find();
    res.json(servicios);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }

}
