const routes = require('express').Router()
const sbController = require('../controllers/sbController')
const View = require('../views/view')


routes.get("/", function(req, res){
    sbController.allSubjects()
    .then(subjectList =>{
        let all = subjectList.map(subjects => subjects.dataValues)
        res.render("allSubjects.ejs", {sbAll: all})
    })
    .catch(err => {
        View.displayError(
            {
                Message: "Errornya di routes.get allSubjects",
                Details: err
            }
        )
    })
})

routes.get("/add", function(req, res){
    res.render("sbAdd.ejs")
})

routes.post("/add", function(req, res){
    sbController.addSubject(req.body)
     .then(data => {
         res.render("sbSaved.ejs", {sbSaved: data.dataValues})
     })
     .catch(err => {
         View.displayError(
            {
            Message: "Error in routes.post addSubject",
            Details: err
            }
        )
     })
})

routes.get("/edit/:id", function(req, res){
    res.render("sbEdit.ejs")
})

routes.post("/edit/:id", function(req, res){
    let params = req.params
    let id = params.id

    sbController.updateSubject(req.body, id)
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

    sbController.findSubject(id)
    .then(sb => {
        res.render("oneSubject.ejs", {sb: sb.dataValues})
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

    sbController.deleteSubject(id)
    .then( data => {
        if(!data){
            View.displayError("Data not found")
            res.redirect('/subjects')
        }
        else{
            View.displayError("Data is deleted!")
            res.redirect('/subjects')

        }
    })
    .catch( err => View.displayError(
        {
            Message: "Errornya di routes.get deleteSubject",
            Details: err
        })
    )
})
module.exports = routes