const routes = require('express').Router();
const SubjectController = require('../controller/SubjectController');
const View = require('../views/view');

routes.get('/', (req, res) => {
    SubjectController.getAllSubjects()
    .then(data => {
        res.render('subject.ejs', {data: data});
    })
    .catch(err => {
        View.displayError(err);
    });
});

routes.post('/', (req, res) => {
    SubjectController.addSubject(req.body)
    .then(data => {
        res.redirect('/subject');
    })
    .catch(err => {
        View.displayError(err);
    });
});

routes.get('/add', (req, res) => {
    res.render('add-subject.ejs');
});

routes.get('/edit/:id', (req, res) => {
    let params = req.params;
    let id = params.id;
        
    SubjectController.findSubject(id)
    .then(subject => {
        res.render("edit-subject.ejs", {data: subject.dataValues});        
    })
    .catch(err => {
        View.displayError(err);
    });    
});

routes.post('/edit:id', (req, res) => {
    let params = req.params;
    let id = params.id;

    SubjectController.updateSubject(id, req.body)
    .then(data => {    
        res.redirect('/subject');
    })
    .catch(err => {
        View.displayError(err);
    });
});

routes.get('/delete/:id', (req, res) => {
    let params = req.params;
    let id = params.id;

    SubjectController.deleteSubject(id)
    .then(data => {
        if(data) {
            View.displaySuccess(`Data deleted!`);                
        } else {
            View.displayError(`Data not found!`);                  
        }
        res.redirect('/subject');
    })
    .catch(err => {
        View.displayError(err);
    });
});

module.exports = routes;