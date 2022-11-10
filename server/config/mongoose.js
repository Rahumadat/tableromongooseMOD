const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/manadaDB', {useNewUrlParser: true})

module.exports=mongoose;