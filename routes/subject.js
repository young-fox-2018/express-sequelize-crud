const routes = require('express').Router();
const bodyParser = require('body-parser');
const ControllerSubject = require('../controllers/controllersubject.js')

routes.get('/', ControllerSubject.findAll)

routes.get('/add', function(req, res) {
  res.render('add-subject')
})

routes.post('/add', ControllerSubject.create)

routes.get('/edit/:id', ControllerSubject.editForm)

routes.post('/edit/:id', ControllerSubject.update)

routes.get('/delete/:id', ControllerSubject.delete)

module.exports = routes;