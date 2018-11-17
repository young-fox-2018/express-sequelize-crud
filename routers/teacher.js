const router = require("express").Router()
const Controller = require("../controllers/teacher")

router.get("/", (req, res) => {
    Controller.allData()
        .then((teacherData) => {
            res.render("teacher.ejs", { teacherData })
        })
})
router.get("/add", (req, res) => {
    res.render("teacherAdd.ejs")
})
router.post("/add", (req, res) => {
    let data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Controller.addData(data)
        .then(() => {
            res.redirect("/teacher")
        })
})
router.get("/edit/:id", (req, res) => {
    Controller.oneData(req.params.id)
        .then((data) => {
            console.log(data);
            res.render("teacherEdit.ejs", { data: data })
        })
})
router.post("/edit/:id", (req, res) => {
    let data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Controller.editData(data, req.params.id)
        .then(() => {
            res.redirect("/teacher")
        })
})
router.get("/delete/:id", (req, res) => {
    Controller.deleteData(req.params.id)
        .then(() => {
            res.redirect("/teacher")
        })
})

module.exports = router