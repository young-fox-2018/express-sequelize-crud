let routes = require('express').Router()

routes.get('/', function(req, res){
    res.send("Hecktivate Student Data!!")
})

module.exports = routes