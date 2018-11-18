const router = require('express').Router()
const TeacherController = require('../controllers/teacherController')


router.get('/', TeacherController.findAll)

router.get('/add', TeacherController.renderAddTeacher)
router.post('/add', TeacherController.addTeacher)

router.get('/edit/:id', TeacherController.renderEditTeacher)
router.post('/edit/:id', TeacherController.editTeacher)

router.get('/delete/:id', TeacherController.deleteTeacher)

module.exports = router