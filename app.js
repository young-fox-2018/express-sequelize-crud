const express = require(`express`)
const ejs = require(`ejs`)
const bodyParser = require(`body-parser`)
let app = express()

app.set(`view engine`, `ejs`)
app.use(express.urlencoded({
    extended: false
}))

//BUAT CSS BIAR GAK ERROR
app.use(express.static(__dirname + '/public'));

app.get(`/`, function (req, res) {
    res.render(`index.ejs`, {
        Waw: `uwaw!`
    })
})

app.listen(3000, () => {
    console.log(`listening to port...`);

})
