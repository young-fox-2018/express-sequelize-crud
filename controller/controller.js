"use strict"

const Model = require('../models/index')

class Controller {
    static showAllStudents() {
        return new Promise((resolve, reject) => {
            Model.Student.findAll()
                .then(data => {
                    const result = data.map(element => element.dataValues)
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

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

    static addStudent(obj) {
        return new Promise((resolve, reject) => {
            Model.Student.create({
                first_name : obj.first_name,
                last_name : obj.last_name,
                email : obj.email
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static getOneStudent(id) {
        return new Promise((resolve, reject) => {
            Model.Student.findOne({
                where: {
                    id: id
                }
            })
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    static editStudent(obj, id) {
        return new Promise((resolve, reject) => {
            if (obj.first_name == '' || obj.last_name == '' || obj.email == '') {
                reject('Please fill all field to update')
            } else {
                Model.Student.update( {
                    first_name : obj.first_name,
                    last_name : obj.last_name,
                    email : obj.email
                }, {
                    where : {
                        id : id
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
                Model.Student.destroy({
                    where : {
                        id : obj.id
                    }
                })
                    .then(data => {
                        resolve(data)
                    })
                    .catch(err => {
                        reject(err)
                    })
        })
    }

    static deleteTeacher(id) {
        return new Promise((resolve, reject) => {
            Model.Teacher.destroy({
                where : {
                    id : id
                }
            })
            .then(data => {
                resolve(data)
                })
            .catch(err => {
                reject(err)
                })
        })
    }
}

module.exports = Controller
