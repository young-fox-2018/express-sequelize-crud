const Model = require('../models');
const Teacher = Model.Teacher

class TeacherController {
    static getAllTeachers() {
        return new Promise( (resolve, reject) => {
            Teacher.findAll()
            .then(data => {
                let teachers = data.map(element => element.dataValues);
                resolve(teachers);
            })
            .catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = TeacherController