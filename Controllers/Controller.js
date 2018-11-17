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

  static addStudent(obj) {
    return new Promise((resolve, reject) => {
      Student.create({
        first_name:obj.first_name,
        last_name:obj.last_name ,
        email: obj.email
      })
      .then(data =>{
        resolve(data)
      })
      .catch(err =>{
        reject(err)
      })
    })
  }


}

module.exports = Controller