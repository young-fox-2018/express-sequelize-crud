const route = require('express').Router()
const Controller = require('../Controllers/Controller')

route.get('/', (req,res) => {
  Controller.readStudents()
    .then(data => {
      res.render('student.ejs' , {data:data})
    })
    .catch(err =>{
      View.display(`ERROR in router student ==> getting data!` , err)
    })
})

route.get('/add' , (req,res) => {
  res.render('formStudent.ejs')
})

route.post('/add' , (req,res) => {
  Controller.addStudent(req.body)
    .then(data1 =>{
      Controller.readStudents()
      .then(data => {
        res.render('student.ejs' , {data:data})
      })
    })
    .catch(err =>{
      View.display(`ERROR in adding student in routes` , err.message)
    })
})

module.exports = route