const routes = require('express').Router();
const TeacherController = require('../controller/TeacherController');
const View = require('../views/view');

routes.get('/', (req, res) => {
    TeacherController.getAllTeachers()
    .then(data => {
        res.render('teacher.ejs', {data: data});
    })
    .catch(err => {
        View.displayError(err);
    });
});

routes.post('/', (req, res) => {
    TeacherController.addTeacher(req.body)
    .then(data => {
        res.redirect('/teacher');
    })
    .catch(err => {
        View.displayError(err);
    })
});

routes.get('/add', (req, res) => {
    res.render('add.ejs', {data: 'Teacher'});
});

routes.get('/edit/:id', (req, res) => {
    let params = req.params;
    let id = params.id;
        
    TeacherController.findTeacher(id)
    .then(teacher => {
        res.render("edit.ejs", {data: teacher.dataValues, title: 'Teacher'});        
    })
    .catch(err => {
        View.displayError(err);
    });    
});

routes.post('/edit:id', (req, res) => {
    let params = req.params;
    let id = params.id;

    TeacherController.updateTeacher(id, req.body)
    .then(data => {    
        res.redirect('/teacher');
    })
    .catch(err => {
        View.displayError(err);
    });
});

routes.get('/delete/:id', (req, res) => {
    let params = req.params;
    let id = params.id;

    TeacherController.deleteTeacher(id)
    .then(data => {
        if(data) {
            View.displaySuccess(`Data deleted!`);                
        } else {
            View.displayError(`Data not found!`);                  
        }
        res.redirect('/teacher');
    })
    .catch(err => {
        View.displayError(err);
    });
});

module.exports = routes;