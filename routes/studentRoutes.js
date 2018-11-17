const routes = require('express').Router()
const { Student } = require('../models')

routes.get('/students', (req, res) => { // ---> Menampilkan data students
    Student.findAll()
        .then(data => {
            console.log(data.dataValues)
            res.render('listStudents.ejs', { data })
        })
        .catch(err => {
            res.send(err)
        })
})

routes.get('/students/add', (req, res) => { // ----> Create
    res.render('studentsForm.ejs')
})

routes.post('/students/add', (req, res) => {
    console.log(req.body)
    Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })
        .then(() => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send(err)
        })
})


routes.get('/students/edit/:id', (req, res) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(students => {
            console.log(students)
            res.render('formEdit', { students: students })
        })
        .catch(err => {
            res.send(err)
        })
})

routes.post('/students/edit/:id', (req, res) => {
    Student.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send(err)
        })
})

routes.get('/students/delete/:id', (req, res) => {
    Student.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.redirect('/students')
    })
    .catch(err => {
        res.send(err)
    })
})
module.exports = routes