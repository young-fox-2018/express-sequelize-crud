const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('.',{ message: `Express Sequelize Crud` })
});

module.exports = routes;