const { Teacher } = require("../models/index.js")

class TeacherController {
    static allData() {
        return Teacher.findAll({
            order: [['id', 'asc']]
        })
    }
    static oneData(id) {
        return Teacher.findOne({
            where: { id: id }
        })
    }
    static addData(data) {
        return Teacher.create(data)
    }
    static editData(data, id) {
        return Teacher.update(data, { where: { id: id } })
    }
    static deleteData(id) {
        return Teacher.destroy({ where: { id: id } })
    }
}
module.exports = TeacherController