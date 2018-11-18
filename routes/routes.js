const routes = require('express').Router()
const studentController = require("../Controllers/studentController")
const teacherController = require("../Controllers/teacherController")
const subjectController = require("../Controllers/subjectController")

// Student Router
routes.get('/', (req,res) => {
        res.render("main.ejs")
})

routes.get('/students', (req,res) => {
        studentController.getAllStudent(req,res)
})

routes.get('/students/add', (req, res) => {
        res.render("addStudent.ejs")
})

routes.post('/students/add', (req, res) => {
        studentController.add(req, res)
})

routes.get('/student/edit/:id', (req,res) => {
        studentController.viewEditStudent(req, res)
})

routes.post('/student/edit/:id', (req, res) => {
        studentController.editStudentPost(req, res)
})


module.exports = routes