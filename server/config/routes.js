const {Router} = require('express')

const routes = Router()

const {manadasGet, renderNuevo, manadaFindOne, manadaFindOneEdit, manadaUpdate, manadaDelete, manadaNuevo, manadaEdit,} = require('../controllers/quotes')

routes.get('/',manadasGet)

routes.get('/nuevo',renderNuevo)

routes.get('/detalle/:id',manadaFindOne)

routes.get('/editar/:id', manadaFindOneEdit )

routes.post('/editar/:id', manadaUpdate)

routes.get('/destruir/:id', manadaDelete)

routes.post('/editar', manadaEdit )

routes.post('/nuevo', manadaNuevo)

module.exports=routes;
