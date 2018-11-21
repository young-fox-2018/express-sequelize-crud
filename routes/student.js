const router = require('express').Router()
const Controller = require('../controllers/studentController.js')


router.get('/', Controller.findAll)

router.get('/add', Controller.renderStudent)
router.post('/add', Controller.addStudent)
//
router.get('/edit/:id', Controller.renderEditTeacher)
router.post('/edit/:id', Controller.editTeacher)
//
router.get('/delete/:id', Controller.deleteStudent)

module.exports = router
