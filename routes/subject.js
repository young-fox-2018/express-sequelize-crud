const router = require('express').Router()
const SubjectController = require('../controllers/subjectController')

router.get('/', SubjectController.findAll)

router.get('/add', SubjectController.renderAddSubject)
router.post('/add', SubjectController.addSubject)

router.get('/edit/:id', SubjectController.renderEditSubject)
router.post('/edit/:id', SubjectController.editSubject)

router.get('/delete/:id', SubjectController.deleteSubject)

module.exports = router
