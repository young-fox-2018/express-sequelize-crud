const Model = require('../models');
const Student = Model.Student;
const View = require('../views/view');

class StudentController {
    static getAllStudents() {
        return new Promise( (resolve, reject) => {
            Student.findAll({order: ['id']})
            .then(data => {
                let students = data.map(element => element.dataValues);                
                resolve(students);
            })
            .catch(err => {
                reject(err);
            });
        });
    }

    static addStudent(data) {
        return new Promise( (resolve, reject) => {
            Student.create({
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                updatedAt: new Date()
            })
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                View.displayError(`Error add data`);            
            });
        });
    }

    static findStudent(id) {
        return new Promise ((resolve, reject) => {
            Student.findByPk(String(id))
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }

    static updateStudent(id, data) {
        return new Promise((resolve, reject) => {
            Student.update(
                {
                    first_name: data.firstName,
                    last_name: data.lastName,
                    email: data.email,
                    updatedAt: new Date()
                },
                {where: {id: id}}
            )
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
        })
    }

    static deleteStudent(id) {
        return new Promise( (resolve, reject) => {
            Student.destroy(
                {where: {id: id}})
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = StudentController