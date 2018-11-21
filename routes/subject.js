const router = require('express').Router()
const Controller = require('../controllers/subjectController.js')


router.get('/', Controller.findAll)

router.get('/add', Controller.renderSubject)
router.post('/add', Controller.addSubject)
//
router.get('/edit/:id', Controller.renderEditSubject)
router.post('/edit/:id', Controller.editSubject)
//
router.get('/delete/:id', Controller.deleteSubject)

module.exports = router
