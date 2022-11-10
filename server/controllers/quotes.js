const Manada = require('../models/manada')
//************************************* */
const manadasGet = (req, res) => {

    Manada.find({})
    
    .then(manada => {
        res.render("index",{infoAnimales: manada})
        // lógica con otros resultados
    })
    .catch(err => res.json(err));
            
}
//***************************************** */
const renderNuevo = (req, res) => {

    res.render('nuevo', {mensaje: " "})
}


//****************************************** */
const manadaFindOne =  (req, res) => {
    
    Manada.findOne({_id: req.params.id})
    
    .then(manada => {
        res.render("detalle",{infoAnimales: manada})
        // lógica con otros resultados
    })
    .catch(err => res.json(err));
            
}
//********************************************* */

const manadaFindOneEdit = (req, res) => {
    
    Manada.findOne({_id: req.params.id})
    
    .then(manada => {
        res.render("editar",{infoAnimales: manada})
        // lógica con otros resultados
    })
    .catch(err => res.json(err));
}
//********************************************* */

const manadaUpdate = (req, res) => {
    Manada.updateOne({_id: req.params.id},req.body)

    .then(manada => {
        res.redirect("/")
        
    })
    .catch(err => res.json(err));
            
}
//************************************************ */

const manadaDelete = (req, res) => {
    
    Manada.deleteOne({_id: req.params.id})
    .then(manada => {
        res.redirect("/")
        // lógica con otros resultados
    })
    .catch(err => res.json(err));
            
}
//**************************************** */

const manadaNuevo = function(req, res) {
    console.log(req.body)
    const { nombreAnimal, tipoAnimal, edad } = req.body
    const manada = new Manada()
    manada.nombreAnimal = nombreAnimal
    manada.tipoAnimal = tipoAnimal
    manada.edad = edad
    manada.save()
    .then(
        () => res.render('nuevo',{mensaje: "agregado con exito"})
    )
    
    .catch (
        (error) =>{ console.log(error)
        },    
    )
}
//******************************************** */

const manadaEdit = function(req, res) {

}

module.exports={manadasGet, manadaFindOne, renderNuevo, manadaFindOneEdit, manadaUpdate, manadaDelete, manadaNuevo, manadaEdit};


