let Model = require(`../models/`)
let Student = Model.Student

class ControllerStudent {
    static findAll(req, res) {
        Student.findAll().then((result) => {
            res.render(`student.ejs`, { result })
        }).catch((err) => {
            res.send(err)
        });
    }

    static add(req, res) {
        Student.create(req.body).then((result) => {
            res.redirect(`/student`)
        }).catch((err) => {
            res.send(err)
        });
    }

    static delete(req, res) {
        Student.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.redirect(`/student`)
        }).catch((err) => {
            res.send(err)
        });
    }

    static edit(req, res) {
        Student.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }, {
                where: {
                    id: req.params.id
                }
        }).then((result) => {
            res.redirect(`/student`)
        }).catch((err) => {
            res.send(err)
        });
    }


}

module.exports = ControllerStudent