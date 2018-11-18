const {Subject} = require("../models/index")

class subjectController {
    static add(req,res) {
        let newSubject = new Subject({
            subject_name: req.body.subject_name
        })
        newSubject.save()
            .then(function(data) {
                console.log(`Successfully add new data`)
                res.redirect("/subjects")
            })
            .catch(function(err) {
                throw err
            })
    }
    static getAllSubject(req, res) {
        Subject.findAll()
            .then(function(data) {
                res.render("listSubjects.ejs",{subjects:data})
            })
            .catch(function(err) {
                res.send(err)
            })
    } 
    
}

module.exports = subjectController