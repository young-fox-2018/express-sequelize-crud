const route = require('express').Router()
const Controller = require('../Controllers/Controller')
const View = require('../Views/view')


route.get('/', (req,res) => {
  Controller.readStudents()
    .then(data => {
      res.render('student.ejs' , {data:data})
    })
    .catch(err =>{
      View.display(`ERROR in router student ==> getting data!` , err)
      res.render('error.ejs')
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
      res.render('error.ejs' , {data: err})
    })
})

route.get('/edit/:id' , (req, res) => {
  res.render('editDataStudent.ejs')
})


route.post('/edit/:id' , (req,res) => {
  if(req.params.id == undefined || req.params.id == null || req.params.id == ''){
    res.send(`Please input id!`)
  } else {
    Controller.editStudent(req.body , req.params.id)
      .then(data =>{
        if(!data){
          alert(`There is no such data!`)
        } else {
          Controller.readStudents()
            .then(data =>{
              res.render('student.ejs' , {data:data})
            })
        }
      })
      .catch(err => {
        View.display(`Error in editting data (post section)` , err)
        res.render('error.ejs', {data:err})
      })
  }
})

route.get('/delete/:id', (req , res) => {
  Controller.deleteStudent(req.params)
    .then(data => {
      if(!data) {
        res.render('error.ejs' , {data: `Data not found`})
      } else {
        // g bisa pake alert (?)
        // alert(`Data is deleted!`)
        Controller.readStudents()
          .then(data => {
            res.render('student.ejs' , {data:data})
          })
      }
    })
    .catch(err =>{
      View.display(`error in delete in students`, err)
      res.render('error.ejs' , {data:err})
    })
})



module.exports = route