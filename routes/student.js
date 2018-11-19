const routes = require('express').Router();
const Model = require("../models")

routes.get("/",(req,res) =>{
    Model.Student.findAll()
        .then(data => {
            res.render("students.ejs", {data: data})
        })
        .catch(err =>{
            res.render("index.ejs", {input:err})
        })
})

routes.get("/add", (req,res) =>{
    res.render('studentForm.ejs')
})

routes.post("/add",(req,res) =>{
    // res.send(req.body)
    Model.Student.create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()

    })
    .then(data => res.render("index.ejs", {input: `successfully added ${req.body.firstName} as Student`}))
    .catch(err => res.render("index", {input:err}))
})

routes.get("/edit/:id", (req,res) => {
    
    res.render("edit.ejs", {input: "Student", id: req.params.id})
})

routes.post("/edit/:id", (req,res) =>{
    Model.Student.update({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        updatedAt: new Date()
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(data => res.redirect("/student"))
    
})

routes.get("/delete/:id", (req,res) =>{
    Model.Student.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(() => res.render("index.ejs", {input: `sucessfully deleted student with id ${req.params.id}`}))
    .catch((err) => res.send(err))
})

module.exports = routes