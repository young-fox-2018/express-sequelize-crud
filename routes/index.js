const routes = require('express').Router()

routes.get('/', function(req, res) {
    res.render('home.ejs')
})

routes.post('/', (req, res) => {
    res.send(req.body)
})

module.exports = routes