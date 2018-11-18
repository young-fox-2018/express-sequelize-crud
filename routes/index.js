const express = require('express')
const router = express.Router()
const StudentController = require('../controllers/StudentController')
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))


router.get('/', (req, res) => {
    StudentController.findAll(req, res)
})

router.get('/add', (req, res) => {
    res.render('add.ejs')
})

router.post('/add', (req, res) => {
    StudentController.add(req, res)
})

router.get('/delete/:id', (req, res) => {
    StudentController.delete(req, res)
})

router.get('/edit/:id', (req, res) => {
    StudentController.edit(req, res)
})

router.post('/edit/:id', (req, res) => {
    StudentController.update(req, res)
})

module.exports = router