;
const EXPRESS = require('express')


let api = EXPRESS.Router()

    //Controles de datos
    fiboControl = require('../controles/fibonacci.js')


//End Points

api.post('/fibonacci-calculo',fiboControl.calculoFibo)
api.post('/traer-datos',fiboControl.traerDatos)

module.exports = api
