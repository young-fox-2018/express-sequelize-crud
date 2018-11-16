const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
    res.send('ini profil sekolah')
})

app.get('/student', function(req, res) {
  //  res.send('form data student')

    res.render('studentForm')
})

app.post('/student', function(req, res) {
    let data = req.body
    res.render('submited', {data:data})
})

app.get('/teachers', function(req, res) {
    res.send('data teacher table')
})

app.listen(port, () => console.log(`running app`))