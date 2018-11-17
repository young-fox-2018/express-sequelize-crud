const router = require('express').Router()
const Controller = require('../controllers/ControllerStudent')

router.get('/', (req, res) => {
    Controller.findAll()
        .then(datastudents => {
            res.render('./students/index.ejs', { datastudents })
        })

})
router.get('/add', (req, res) => {
    res.render('./students/add.ejs')
})
router.post('/add', (req, res) => {
    let newStudent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Controller.add(newStudent)
        .then(() => {
            res.redirect('/student')
        })
})
router.get('/edit/:id', (req, res) => {
    Controller.findById({
        where: {
            id: req.params.id
        }
    })
        .then(student => {
            res.render('./students/edit.ejs', ({ student }))
        })
})
router.post('/edit/:id', (req, res) => {
    let newStudent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Controller.edit(newStudent, req.params.id)
        .then(() => {
            res.redirect('/student')
        })
})
router.get('/delete/:id', (req, res) => {
    Controller.delete(req.params.id)
        .then(() => {
            res.redirect('/student')
        })
})


module.exports = router