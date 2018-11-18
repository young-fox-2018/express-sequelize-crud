
const router = require("express").Router();
const Controller = require("../Controller/controller")

router.get("/add", (req, res) => {
    res.render("addStudent.ejs")
})

router.post("/add", (req, res) => {
    Controller.addStudent(req, res)
})

module.exports = router