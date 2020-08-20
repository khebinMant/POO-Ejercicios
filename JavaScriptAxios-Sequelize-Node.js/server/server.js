var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
var modelos = require("../server/models");

app.use(cors())
app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));




let maximoValorSerie ;
var resultado = {
   sumaPares : 0,
   listaPares : [],
   listaTodos : []    
}

var corsOptions = {
    origin: 'http://127.0.0.1:5500/client/fibo.html',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.post('/fibonacci', function (req, res) {


   console.log("entre al fibo")
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

    res.send(resultado);
})
 
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

modelos.sequelize.sync().then(() => {
   console.log('DB en línea...')
}).catch(err => {
   console.log(err) 
})

app.listen(8081, function () {
    console.log("Example app listening at http://%s:%s")
 }) 

