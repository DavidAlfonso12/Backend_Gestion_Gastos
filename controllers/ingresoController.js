const Ingreso = require('../models/Ingreso');
const Gastos = require('../models/gastos');
const Servicios = require('../models/Servicios');
const consulta = require('../models/consulta');

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

exports.obtenerConsulta = async (req, res) =>{

  try {
    console.log(req.body.fecha);
    let fechaInicio = req.body.fecha.slice(0,7);
    console.log(fechaInicio);
    let fechaFin = '2021-12'
    sumarMes = () => {
      if (fechaInicio[5] == 1, fechaInicio[6] == 2){
        x = fechaInicio.slice(fechaInicio.lastIndexOf('1'))
        y = x.replace(x, "01")
        console.log(y);
      }
    }
    sumarMes()
    let ConsultaG = await Gastos.find({ $and: [{fecha: {$gte:fechaInicio}}, {fecha: {$lt:fechaFin}}]  });
    // console.log(ConsultaG);
    //let ConsultaI = await Ingreso.findByFecha(req.body.fecha)

    if(!Gastos){
      res.status(404).json({ msg: 'No existe gasto por esta fecha'})
    }
    if(!Ingreso){
      res.status(404).json({ msg: 'No existe ingreso por esta fecha'})
    }

    res.json(ConsultaG)


  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }

}
