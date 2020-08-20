;
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env]
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
let modelos = require('../models')
let Op = Sequelize.Op;


//Enviar desde el client infromacion al servidor(3 numeros) 
//Recibir los numeros en el servidor y proceder hacer las respectivas algoritmos de fibonacci
//Es guadar tanto los numeros enviados en un tabla con sequelize y las 3 respuestas que se presentan tambien guardalas
//en el client mediante alguna accion pedir toda la informacion que se encuentra en la tabla


let maximoValorSerie ;
var resultado = {
   sumaPares : 0,
   listaPares : [],
   listaTodos : []    
}


let calculoFibo = (req,res)=>{

    let primerElemento = parseInt(req.body.fibo1) 
    let segundoElemento = parseInt(req.body.fibo2)
    maximoValorSerie  = parseInt(req.body.maximo)
 
 
    if(esPar(primerElemento)){
        resultado.listaPares.push(primerElemento);
    }
    
    if(esPar(segundoElemento)){
        resultado.listaPares.push(segundoElemento);
    }
 
    console.log(generadorFibonacci(primerElemento,segundoElemento).sumaPares);
    console.log(resultado.listaTodos)

    let data = req.body;
    console.log(data)

    data.primerElemento = data.fibo1;
    data.segundoElemento = data.fibo2;
    data.maximoValorSerie = data.maximo;
    data.listaTodos = resultado.listaTodos[0];
    data.listaPares = resultado.listaPares[0];
    data.sumaPares = resultado.sumaPares;

    modelos.Informacion.create(data)
    .then(respuesta => {
        res.send(respuesta);
    }).catch(err => {
        res.send(err)
    })
}
 let traerDatos=(req,res)=>{
    modelos.Informacion.findAll({

    }).then(respuesta => {
        res.status(200).json({
            respuesta
        }) 
    }).catch(err => {
        res.status(500).json({
            transaccion: false,
            data: err,
            msg: 'Servidor no disponible'
        })
    })
 }

var esPar = function(numero){
    if (numero%2 === 0) {
        return true;
    } else {
        return false;
    }
 }
 
 var generadorFibonacci = function(anterior,ultimo){
    if (anterior + ultimo > maximoValorSerie) {
       return resultado;
    } else {
       nuevo = anterior + ultimo;
       if(esPar(nuevo)){
          resultado.sumaPares += nuevo;
          resultado.listaPares.push(nuevo);  //inserta en el array de pares
       }
       resultado.listaTodos.push(nuevo);  //inserta en el array de todos los elementos
       return generadorFibonacci(ultimo,nuevo);
    }
 }
module.exports = {
    calculoFibo,
    traerDatos
}