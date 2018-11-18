const express = require('express')
const app = express()
const port = 3000
const routeStudent = require('./routes')
const Model = require('./models')

app.use('/student', routeStudent)

// app.get('/', (req, res) => {
//     Model.Student.findAll()
//         .then(data => {
//             res.send(data)
//         })
//         .catch(err => {
//             res.send(err)
//         })
// })



app.listen(port, () => {console.log('App is running in port', port)})

