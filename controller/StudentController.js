"use strict"

const Model = require('../models/index')

class StudentController {
    static getAll() {
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

    static getOne(id) {
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

    static add(obj) {
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

    static edit(obj, id) {
        return new Promise((resolve, reject) => {
            if (obj.first_name == '' || obj.last_name == '' || obj.email == '') {
                reject('Please fill all field to update')
            } else {
                console.log('masuk ga')
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
                    console.log(err)
                    reject(err)
                })
            }         
        })
    }

    static delete(obj) {
        return new Promise((resolve, reject) => {
                Model.Student.destroy( {
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
}

module.exports = StudentController