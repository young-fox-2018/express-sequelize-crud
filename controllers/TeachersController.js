const { Teacher } = require('../models')
class TeacherController {
    static findAll() {
        return new Promise((resolve, reject) => {
            Teacher.findAll()
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    console.log("masuk")
                    reject(err)
                })
        })
    }
    static findOne(id) {
        return new Promise((resolve, reject) => {
            Teacher.findOne({
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
    static create(params) {
        return new Promise((resolve, reject) => {
            Teacher.create({
                first_name: params.first_name,
                last_name: params.last_name,
                email: params.email
            })
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
    static update(params, id) {
        return new Promise((resolve, reject) => {
            Teacher.update({
                first_name: params.first_name,
                last_name: params.last_name,
                email: params.email
            }, {
                where: {
                    id: id
                } 
            })
            .then(() => {
                resolve()
            })
            .catch(err => {
                reject(err)
            })
        })
    }
    static delete(id) {
        return new Promise((resolve, reject) => {
            Teacher.destroy({
                where: {
                    id: id
                }
            })
            .then(() => {
                resolve()
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
}

module.exports = TeacherController
