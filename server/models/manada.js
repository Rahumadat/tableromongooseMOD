const mongoose = require('mongoose')

const ManadaSchema = new mongoose.Schema({
    nombreAnimal: {type: String, require: [true, 'Nombre requerido'],},
    tipoAnimal: {type: String, require: [true, 'tipo requerido']},
    edad: {type: String, require: [true, 'Edad requerido']},
})

const Manada = mongoose.model('Manada', ManadaSchema)

module.exports=Manada;