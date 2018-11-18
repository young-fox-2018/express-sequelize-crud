const routes = require('express').Router();
const bodyParser = require('body-parser');
const ControllerTeacher = require('../controllers/controllerteacher.js')

routes.get('/', ControllerTeacher.findAll)

routes.get('/add', function(req, res) {
  res.render('add-teacher')
})

routes.post('/add', ControllerTeacher.create)

module.exports = routes;