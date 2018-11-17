const route = require('express').Router()

route.get('/', (req,res) => {
  res.render('student.ejs')
})

module.exports = route