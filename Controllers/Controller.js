const Model = require('../models/index')
const Student = Model.Student
const Teacher = Model.Teacher
const Subject = Model.Subject


class Controller {

  static readTeachers() {
    return new Promise((resolve, reject) => {
      Teacher.findAll()
        .then(data => {
          let result = data.map(element => element.dataValues)
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static readStudents() {
    return new Promise((resolve, reject) => {
      Student.findAll()
        .then(data => {
          let result = data.map(element => element.dataValues)
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  }


}

module.exports = Controller