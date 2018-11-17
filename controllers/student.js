const { Student } = require("../models/index.js")

class StudentController {
    static allData() {
        return Student.findAll({
            order: [['id', 'asc']]
        })
    }
    static oneData(id) {
        return Student.findOne({ where: { id: id } })
    }
    static addData(data) {
        return Student.create(data)
    }
    static EditData(data, id) {
        return Student.update(data, { where: { id: id } })
    }
    static deleteData(id) {
        return Student.destroy({ where: { id: id } })
    }
}

module.exports = StudentController

