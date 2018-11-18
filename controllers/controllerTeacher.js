let Model = require(`../models/`)
let Teacher = Model.Teacher

class ControllerTeacher {
    static findAll(req, res) {
        Teacher.findAll().then((result) => {
            res.render(`teacher.ejs`, { result })

        }).catch((err) => {
            res.send(err)
        });
    }

    static add(req, res) {
        Teacher.create(req.body).then((result) => {
            res.redirect(`/teacher`)
        }).catch((err) => {
            console.log(err);
        });
    }

    static delete(req, res) {
        Teacher.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.redirect(`/teacher`)
        }).catch((err) => {
            req.send(err)
        });
    }

    static edit(req, res) {
        Teacher.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }, {
                where: {
                    id: req.params.id
                }
            }).then((result) => {
                res.redirect(`/teacher`)
            }).catch((err) => {
                res.send(err)
            });
    }
}

module.exports = ControllerTeacher