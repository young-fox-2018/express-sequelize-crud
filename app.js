const express = require(`express`)
const ejs = require(`ejs`)
const bodyParser = require(`body-parser`)
let app = express()

//
let home = require(`./routes/index`)
let student = require(`./routes/student`)
let teacher = require(`./routes/teacher`)
let subject = require(`./routes/subject`)

app.set(`view engine`, `ejs`)
app.use(bodyParser.urlencoded({}))

//BUAT CSS BIAR GAK ERROR
app.use(express.static(__dirname + '/public'));

//ROUTING
app.use(`/`, home)
app.use(`/student`, student)
app.use(`/teacher`, teacher)
app.use(`/subject`, subject)

//LISTEN
app.listen(3000, () => {
    console.log(`listening to port...`);
})

