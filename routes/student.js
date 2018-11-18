var express = require('express');
var router = express.Router();
const model = require('../models')
const student = model.Student 

router.get('/', function(req, res){
      student.findAll()
      .then(success=>{
        // res.json(success)
        res.render('./student',{
            dataStudent: success
        });
      })
      .catch(err=>{

      })
    //   res.send("INI STUDENT")
});

router.get('/add', function(req,res){
    res.render('./add')
})

router.post('/add', function(req,res){
    student.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    })
    .then(success=>{
      res.redirect('/student')
    })
})

router.get('/edit/:id', function(req, res){
    const id = req.params.id
    student.findById(id)
    .then(success=>{
        res.render('./edit',{
            detailStudent : success
        });
    })
})

router.post('/edit/:id', function(req, res){
  const id = req.params.id
  console.log(req.body)
  student.update({
    first_name : req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email},
    {where: {id}
  })
  .then(success=>{
    res.redirect('/student')
  })
});

router.get('/delete/:id', function(req,res){
  const id = req.params.id
  student.destroy({
    where:{id}
  })
  .then(success=>{
    res.redirect('/student')
  })
})

//export this router to use in our index.js
module.exports = router;