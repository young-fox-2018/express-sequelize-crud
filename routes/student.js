const routes = require('express').Router()
const Controller = require('../controllers/Controller')
const View = require('../View.js')


routes.get('/', function(req, res){
    Controller.readAllStudent()
    .then(data =>{
        res.render('viewStudent.ejs', {data:data})
    })
    .catch(err => {
        View.printError(err)
    })
})

routes.get('/add', function(req, res) {
    res.render('addStudent.ejs')
})

routes.post('/add', (req, res) => {
    Controller.addStudent(req.body)
    .then(data => {
        const result = data.dataValues
        if (result.id > 0) {
            res.render('savedStudent.ejs', {dataSaved: data.dataValues})
        }
    })
    .catch(err => {
        const message = err.message
        
        View.printError(message)
    })
})

routes.get('/edit:id', function(req, res) {
    res.render('addStudent.ejs')
})

routes.post('/edit:id', (req, res) => {
    Controller.addStudent(req.body)
    .then(data => {
        const result = data.dataValues
        if (result.id > 0) {
            res.render('updateStudent.ejs', {dataSaved: data.dataValues})
        }
    })
    .catch(err => {
        const message = err.message
        
        View.printError(message)
    })
})

routes.get('/:id', function(req, res) {
    let params = req.params
    let id = params.id

    Controller.findStudent(id)
    .then(data => {
        res.render("findStudent.ejs", {student: data.dataValues})
    })
    .catch(err =>{
        View.printError(err)
    })

})

module.exports = routes