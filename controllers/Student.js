const Model = require('../models')
const Student = Model.Student

class StudentController {
    static create(obj) {
        return Student.create(obj)
    }

    static findOne(id) {
        Student.findOne({where: {id: id}})
    }

    static findAll() {
        Student.findAll()
            .then(data => {
                let students = data.map(e => e.dataValues)
                return students
            })
            .catch(err => {
                return err
            })
    }

    static update(obj, id) {
        Student.update(obj, {where: {id: id}})
    }

    static delete(id) {
        Student.destroy({where: {id: id}})
    }
}

module.exports = StudentController