const router = require('express').Router()
const Controller = require('../controllers/ControllerTeacher')


router.get('/', (req, res) => {
    Controller.findAll()
        .then(datateachers => {
            res.render('./teachers/index.ejs', { datateachers })
        })
})


module.exports = router