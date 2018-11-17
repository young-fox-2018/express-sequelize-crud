var express = require('express');
var app = express();
const home = require('./routes/index');
const student = require('./routes/student');
const teacher = require('./routes/teacher');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use('/', home);
app.use('/student', student);
app.use('/teacher', teacher);
app.use(express.static(__dirname + '/views'));

app.listen(3000, () => {
    console.log(`Localhost with port 3000 running...`);
});