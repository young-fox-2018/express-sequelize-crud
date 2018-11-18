const router = require('express').Router()
const Student = require('../controllers/Student')

router.get('/add', (req, res) => {
    res.render('studentAdd.ejs')
})

router.post('/add', (req, res) => {
    let obj = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Student.create(obj)
        .then(() => {
            res.redirect('/students/add')
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/', (req, res) => {
    Student.findAll()
        .then(students => {
            res.render('students.ejs', students) 
        })
})

module.exports = router