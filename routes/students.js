const routes = require('express').Router()
const sController = require('../controllers/sController')
const View = require('../views/view')


routes.get("/", function(req, res){
    sController.allStudent()
    .then(studentList =>{
        let all = studentList.map(students => students.dataValues)
        // console.log(students.dataValues,"===========================================")
        // console.log(all,"==========================================================")
        res.render("allStudents.ejs", {studentsAll: all})
    })
    .catch(err => {
        View.displayError(
            {
                Message: "Errornya di routes.get allStudent",
                Details: err
            }
        )
    })
})

routes.get("/add", function(req, res){
    res.render("studentsAdd.ejs")
})

routes.post("/add", function(req, res){
    sController.addStudent(req.body)
     .then(data => {
         res.render("studentSaved.ejs", {dataSaved: data.dataValues})
     })
     .catch(err => {
         View.displayError(
            {
            Message: "Error in routes.post addStudent",
            Details: err
            }
        )
     })
})

routes.get("/edit/:id", function(req, res){
    res.render("studentsEdit.ejs")
})

routes.post("/edit/:id", function(req, res){
    let params = req.params
    let id = params.id

    sController.updateStudent(req.body, id)
    .then( () => {
        res.render("edited.ejs")
    })
    .catch(err =>{
        View.displayError(
            {
                Message: "Errornya di routes.get /edit/:id",
                Details: err
            }
        )
    })
})

routes.get("/:id", function(req,res){
    let params = req.params
    let id = params.id

    sController.findStudent(id)
    .then(student => {
        res.render("oneStudent.ejs", {student: student.dataValues})
    })
    .catch(err =>{
        View.displayError(
            {
                Message: "Errornya di routes.get /:id",
                Details: err
            }
        )
    })
})

routes.get("/delete/:id", function(req,res){
    let params = req.params
    let id = params.id

    sController.deleteStudent(id)
    .then( data => {
        if(!data){
            View.displayError("Data not found")
            res.redirect('/students')
        }
        else{
            View.displayError("Data is deleted!")
            res.redirect('/students')

        }
    })
    .catch( err => View.displayError(
        {
            Message: "Errornya di routes.get deleteStudent",
            Details: err
        })
    )
})
module.exports = routes