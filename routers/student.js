const router = require("express").Router()
const Controller = require("../controllers/student")

router.get('/', (req, res) => {
    Controller.allData()
        .then(studentData => {
            res.render('student.ejs', { studentData })
        })
})
router.get('/add', (req, res) => {
    res.render('studentAdd.ejs')
})
router.post('/add', (req, res) => {
    let data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Controller.addData(data)
        .then(() => {
            res.redirect('/student')
        })
})
router.get('/edit/:id', (req, res) => {
    // console.log(req.params.id);
    Controller.oneData(req.params.id)
        .then(data => {
            res.render('studentEdit.ejs', { data })
        })
})
router.post('/edit/:id', (req, res) => {
    // console.log(req.params.id);
    let data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Controller.EditData(data, req.params.id)
        .then(() => {
            res.redirect('/student')
        })
})
router.get('/delete/:id', (req, res) => {

    Controller.deleteData(req.params.id)
        .then(() => {
            res.redirect("/student")
        })
})

module.exports = router