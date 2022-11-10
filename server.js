const express = require('express')

const mongoose = require('./server/config/mongoose');
const Manada = require('./server/models/manada');
const router = require('./server/config/routes');
const bodyParse = require('body-parser')

const app = express()
app.use(bodyParse.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/static'))

app.set('views', __dirname + '/views')

app.set('view engine', 'ejs')

app.use(router)

app.listen(8000, function() {
    console.log ("listening in port 8000");
})
