const router = require('express').Router()
const StudentController = require('../controllers/studentController')

router.get('/', StudentController.findAll)

router.get('/add', StudentController.renderAddStudent)
router.post('/add', StudentController.addStudent)

router.get('/edit/:id', StudentController.renderEditStudent)
router.post('/edit/:id', StudentController.editStudent)

router.get('/delete/:id', StudentController.deleteStudent)

module.exports = router