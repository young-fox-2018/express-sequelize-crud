const routes = require('express').Router();
const StudentController = require('../controller/StudentController');

function getAll() {
    
}

routes.get('/', (req, res) => {
    StudentController.getAllStudents()
    .then(data => {        
        res.render('student.ejs', {data: data});
    })
    .catch(err => {
        console.log(err);
    });
});

routes.post('/', (req, res) => {
    StudentController.addStudent(req.body)
    .then(data => {
        res.redirect('/student');
    })
    .catch(err => {
        console.log(err);
    });
});

routes.get('/edit/:id', (req, res) => {
    let params = req.params;
    let id = params.id;
    
    // if (typeof id === 'number') {
        StudentController.findStudent(id)
        .then(student => {
            res.render("edit-student.ejs", {data: student.dataValues});        
        })
        .catch(err => {
            console.log(err);
        });
    // }
});

routes.post('/edit:id', (req, res) => {
    let params = req.params;
    let id = params.id;

    StudentController.updateStudent(id, req.body)
    .then(data => {    
        res.redirect('/student');
    })
    .catch(err => {
        console.log(err);
    });
});

routes.get('/delete/:id', (req, res) => {
    let params = req.params;
    let id = params.id;

    StudentController.deleteStudent(id)
    .then(data => {
        if(data) {
            console.log(`Data deleted!`);            
        } else {
            console.log(`Data not found!`);            
        }
        res.redirect('/student');
    })
    .catch(err => {
        console.log(err);
    });
});


routes.get('/add', (req, res) => {
    res.render('add-student.ejs');
});

module.exports = routes;