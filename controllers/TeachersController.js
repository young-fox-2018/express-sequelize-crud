const { Teacher } = require('../models')
class TeacherController {
    static findAll() {
        return Teacher.findAll()
    }
    static findOne(id) {
        return Teacher.findOne({
            where: {
                id: id
            }
        })
    }
    static create(params) {
        return Teacher.create({
            first_name: params.first_name,
            last_name: params.last_name,
            email: params.email
        })
    }
    static update(params, id) {
        return Teacher.update({
            first_name: params.first_name,
            last_name: params.last_name,
            email: params.email
        }, {
                where: {
                    id: id
                }
            })
    }
    static delete(id) {
        return Teacher.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = TeacherController


