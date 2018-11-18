var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var home = require('./routes')
var student = require('./routes/student')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');

app.use('/', home);
app.use('/student', student);



app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });