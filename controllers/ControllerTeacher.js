const { Teacher } = require('../models/index')


class Controller {
    static findAll() {
        return Teacher.findAll({
            order: [['id', 'ASC']]
        })
    }
    static add(newTeacher) {
        return Teacher.create(newTeacher)
    }
    static findById(id) {
        return Teacher.findOne(id)
    }
    static update(newTeacher, id) {
        return Teacher.update(newTeacher, {
            where: {
                id: id
            }
        })
    }
    static delete(id) {
        return Teacher.destroy(id)
    }


}

module.exports = Controller