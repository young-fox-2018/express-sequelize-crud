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

  static editStudent(obj , id) {
    return new Promise ((resolve , reject) => {
      if(obj.first_name == '' || obj.first_name == undefined){
        reject(`Please fill first name!`)
      } else if (obj.last_name == '' || obj.last_name == undefined) {
        reject(`Please fill last name!`)
      } else if(obj.email == '' || obj.email == undefined) {
        reject(`Please fill email!`)
      } else {
        Student.update({
          first_name : obj.first_name, 
          last_name : obj.last_name,
          email : obj.emal
        }, {
            where:{
              id:id
            }
        })
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
      }
    })
  }

  static deleteStudent(obj) {
    return new Promise((resolve, reject) => {
      Student.destroy({where :{id :obj.id}})
        .then(data =>{
          if(!data) {
            reject(`There is no data with id :${obj.id}`)
          } else {
            resolve(data)
          }
        })
        .catch(err =>{
          reject(err)
        })
    })
  }
}

module.exports = Controller