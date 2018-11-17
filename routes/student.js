const routes = require('express').Router();
const StudentController = require('../controller/StudentController');
const View = require('../views/view');

routes.get('/', (req, res) => {
    StudentController.getAllStudents()
    .then(data => {        
        res.render('student.ejs', {data: data});
    })
    .catch(err => {
        View.displayError(err);
    });
});

routes.post('/', (req, res) => {
    StudentController.addStudent(req.body)
    .then(data => {
        res.redirect('/student');
    })
    .catch(err => {
        View.displayError(err);
    });
});

routes.get('/edit/:id', (req, res) => {
    let params = req.params;
    let id = params.id;
        
    StudentController.findStudent(id)
    .then(student => {
        res.render("edit.ejs", {data: student.dataValues, title: 'Student'});        
    })
    .catch(err => {
        View.displayError(err);
    });    
});

routes.post('/edit:id', (req, res) => {
    let params = req.params;
    let id = params.id;

    StudentController.updateStudent(id, req.body)
    .then(data => {    
        res.redirect('/student');
    })
    .catch(err => {
        View.displayError(err);
    });
});

routes.get('/delete/:id', (req, res) => {
    let params = req.params;
    let id = params.id;

    StudentController.deleteStudent(id)
    .then(data => {
        if(data) {
            View.displaySuccess(`Data deleted!`);                
        } else {
            View.displayError(`Data not found!`);                  
        }
        res.redirect('/student');
    })
    .catch(err => {
        View.displayError(err);
    });
});


routes.get('/add', (req, res) => {
    res.render('add.ejs', {data: 'Student'});
});

module.exports = routes;