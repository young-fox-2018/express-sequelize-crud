"use strict"

const Model = require('../models/index')

class TeacherController {
    static getAll() {
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

    static delete(id) {
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
     
module.exports = TeacherController