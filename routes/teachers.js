const routes = require('express').Router()
const tController = require('../controllers/tController')
const View = require('../views/view')


routes.get("/", function(req, res){
    tController.allTeachers()
    .then(teacherList =>{
        let all = teacherList.map(teachers => teachers.dataValues)
        res.render("allTeachers.ejs", {teachersAll: all})
    })
    .catch(err => {
        View.displayError(
            {
                Message: "Errornya di routes.get allTeachers",
                Details: err
            }
        )
    })
})

routes.get("/add", function(req, res){
    res.render("teachersAdd.ejs")
})

routes.post("/add", function(req, res){
    tController.addTeacher(req.body)
     .then(data => {
         res.render("teacherSaved.ejs", {dataSaved: data.dataValues})
     })
     .catch(err => {
         View.displayError(
            {
            Message: "Error in routes.post addTeacher",
            Details: err
            }
        )
     })
})

routes.get("/edit/:id", function(req, res){
    res.render("teachersEdit.ejs")
})

routes.post("/edit/:id", function(req, res){
    let params = req.params
    let id = params.id

    tController.updateTeacher(req.body, id)
    .then( () => {
        res.render("edited.ejs")
    })
    .catch(err =>{
        View.displayError(
            {
                Message: "Errornya di routes.get /edit/:id Teachers",
                Details: err
            }
        )
    })
})

routes.get("/delete/:id", function(req,res){
    let params = req.params
    let id = params.id

    tController.deleteTeacher(id)
    .then( data => {
        if(!data){
            View.display("Data not found")
            res.redirect('/teachers')
        }
        else{
            View.display("Data is deleted!")
            res.redirect('/teachers')

        }
    })
    .catch( err => View.displayError(
        {
            Message: "Errornya di routes.get deleteTeacher",
            Details: err
        })
    )
})
module.exports = routes