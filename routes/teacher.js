const routes = require('express').Router();
const bodyParser = require('body-parser');
const ControllerTeacher = require('../controllers/controllerteacher.js')

routes.get('/', ControllerTeacher.findAll)

routes.get('/add', function(req, res) {
  res.render('add-teacher')
})

routes.post('/add', ControllerTeacher.create)

routes.get('/edit/:id', ControllerTeacher.editForm)

routes.post('/edit/:id', ControllerTeacher.update)

routes.get('/delete/:id', ControllerTeacher.delete)

module.exports = routes;