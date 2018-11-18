const Model = require("../models")
const Student = Model.Student;

class Controller {
    static addStudent(req, res) {
       Student.create()
    }
}

module.exports = Controller