const Model = require('../models')
const Students = Model.Student

class Student {

    static showData (req, res) {
        Students.findAll({order: ['id']})
        .then((data) => {
            data = data.map(e => e.dataValues)
            console.log(data)
            res.render('StudentsTable', {data:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static addData (req, res) {
        let data = req.body
        Students.create({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
        })
        .then((data) => {
            res.render('Success')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static deleteData (req, res) {
        let data = req.params.id
        Students.destroy({
            where: {
                id: data
            }
        })
        .then((data) => {
            res.render('Success')
        })
    }

    static editData (req, res) {
        let id = req.params.id
        let data = req.body
        Students.update({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
        }, {
            where: {
                id: id
            }
        })
        .then((data) => {
            res.render('Success')
        })
        .catch((err) => {
            console.log(err)
        })
    }

}

module.exports = Student