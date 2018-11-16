const app = require('express')()
const teacherRoutes = require('./routes/teacher')
const studentRoutes = require('./routes/student')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/teachers', teacherRoutes)
app.use('/students', studentRoutes)


app.listen(4000, () => {
    console.log('Server is listening on port 4000')
})