const route = require('express').Router()
const Controller = require('../Controllers/Controller')
const View = require('../Views/view')


route.get('/', (req,res) => {
  Controller.readTeachers()
    .then(data => {
      res.render('teacher.ejs' , {data:data})
    })
    .catch(err =>{
      View.display(`ERROR in router teacher ==> getting data!` , err)
    })
})

module.exports = route