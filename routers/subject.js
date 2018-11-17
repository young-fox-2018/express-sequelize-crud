const router = require("express").Router()
const Controller = require("../controllers/subject")

router.get("/", (req, res) => {
    Controller.allData()
        .then((subjectData) => {
            res.render("subject.ejs", { subjectData: subjectData })
        })
})
router.get("/add", (req, res) => {
    res.render("subjectAdd.ejs")
})
router.post("/add", (req, res) => {
    let data = {
        subject_name: req.body.subject_name
    }
    Controller.addData(data)
        .then(() => {
            res.redirect("/subject")
        })
})
router.get("/edit/:id", (req, res) => {
    Controller.oneData(req.params.id)
        .then((data) => {
            // console.log(data);
            res.render("subjectEdit.ejs", { data: data })
        })
})
router.post("/edit/:id", (req, res) => {
    let data = {
        subject_name: req.body.subject_name
    }
    console.log(data, req.params.id);
    Controller.editData(data, req.params.id)
        .then(() => {
            res.redirect("/subject")
        })
})
router.get("/delete/:id", (req, res) => {
    Controller.deleteData(req.params.id)
        .then(() => {
            res.redirect("/subject")
        })
})
module.exports = router