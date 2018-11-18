const { Subject } = require('../models')

class SubjectController {
    static findAll() {
        return Subject.findAll()
    }
    static findOne(id) {
        return Subject.findOne({
            where: {
                id: id
            }
        })
    }
    static create(params) {
        return Subject.create({
            subject_name: params.subject_name
        })
    }
    static update(params, id) {
        return Subject.update({
            subject_name: params.subject_name
        }, {
            where: {
                id: id
            }
        })
    }
    static delete(id) {
        return Subject.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = SubjectController