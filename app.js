const StudentController = require('./Controller/StudentController')
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/students', StudentController.showData);

app.get('/students/add', (req, res) => {
    res.render('addFormStudent')
});

app.post('/students/add', StudentController.addData);

app.get('/students/edit/:id', (req, res) => {
    res.render('updateForm', {id: req.params.id})
});

app.post('/students/edit/:id', StudentController.editData);

app.get('/students/delete/:id', StudentController.deleteData);





app.listen(port, () => console.log('wes mlaku...'))