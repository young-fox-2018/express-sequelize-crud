const routes = require('express').Router();
const bodyParser = require('body-parser');
const ControllerStudent = require('../controllers/controllerstudent.js')

routes.get('/', ControllerStudent.findAll)

routes.get('/add', function(req, res) {
  res.render('add-student')
})

routes.post('/add', ControllerStudent.create)

module.exports = routes;