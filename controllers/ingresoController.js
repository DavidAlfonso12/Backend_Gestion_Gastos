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
    let ano = parseInt(req.body.fecha.slice(0,4));
    let mes = parseInt(req.body.fecha.slice(5,7));
    let fechaFin = sumarMes(ano,mes)
    let ConsultaG = await Gastos.find({ $and: [{fecha: {$gte:fechaInicio}}, {fecha: {$lt:fechaFin}}]  });
    let ConsultaI = await Ingreso.find({ $and: [{fecha: {$gte:fechaInicio}}, {fecha: {$lt:fechaFin}}]  });
    let datos = {
      "Gastos":ConsultaG,
      "ingresos":ConsultaI
    }
    if(!Gastos){
      res.status(404).json({ msg: 'No existe gasto por esta fecha'})
    }
    if(!Ingreso){
      res.status(404).json({ msg: 'No existe ingreso por esta fecha'})
    }
    res.json(datos)
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}
sumarMes = (ano1, mes1) =>{
  mes1 = mes1 + 1;
  if (mes1 > 12) {
    mes1 = 01;
    ano1 = ano1 +1;
  }
  let fechaFinal = ano1 + "-" + mes1;
  return fechaFinal;
}