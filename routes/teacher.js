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
    })
});

module.exports = routes;