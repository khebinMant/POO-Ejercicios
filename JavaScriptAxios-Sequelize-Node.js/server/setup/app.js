
;
let env = require('dotenv').config()

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
var modelos = require("../models");
var rutas = require('../rutas/index.js')
var corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));


modelos.sequelize.sync().then(() => {
    console.log('DB en línea...')
}).catch(err => {
    console.log(err) 
})

app.get('/', function (req, res) {
   res.send('Hola Mundo con nodes js ');
})

app.use('', rutas)

module.exports = app