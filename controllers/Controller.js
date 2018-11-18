'use strict'
const Model = require('../models/index')
// const Student = Model.Student

class Controller {
    static readAllTeacherData() {
        return new Promise((resolve, reject) => {
            Model.Teacher.findAll()
            .then(data => {
                const result = data.map(element => element.dataValues)
                resolve(result)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static readAllStudent(){
        return new Promise((resolve, reject) =>{
            Student.findAll()
             .then(dataList => {
                 resolve(dataList)
             })
             .catch(err => {
                 reject(err)
             })
        })
    }

    static addStudent(obj) {
        return new Promise((resolve, reject) => {
            Model.Student.create({
                first_name : obj.firstName,
                last_name : obj.lastName,
                // first_name : obj.first_name,
                // last_name : obj.last_name,
                email : obj.email,
                createdAt: new Date(),
                updateAt: new Date()
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
    
    static findStudent(id){
        return new Promise((resolve, reject) => {
            Student.findByPk(String(id))
            .then(student =>{
                resolve(student)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static updateStudent(input, id){
        return new Promise( (resolve, reject) => {
            Student.update({
                first_name: input.firstname,
                last_name: input.lastname,
                email: input.email
            },
            {where: {id: id}}
            )
            .then(data => resolve(data) )
            .catch(err => reject(err) )
        })
    }
}

module.exports = Controller