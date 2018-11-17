const { Subject } = require("../models/index.js")

class SubjcetController {
    static allData() {
        return Subject.findAll({ order: [["id", "asc"]] })
    }
    static oneData(id) {
        return Subject.findOne({ where: { id: id } })
    }
    static addData(data) {
        return Subject.create(data)
    }
    static editData(data, id) {
        return Subject.update(data, { where: { id: id } })
    }
    static deleteData(id) {
        return Subject.destroy({ where: { id: id } })
    }
}
module.exports = SubjcetController