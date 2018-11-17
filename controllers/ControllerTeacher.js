const { Teacher } = require('../models/index')


class Controller {
    static findAll() {
        return Teacher.findAll({
            order: [['id', 'ASC']]
        })
    }

}

module.exports = Controller