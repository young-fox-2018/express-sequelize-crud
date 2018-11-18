let Model = require(`../models`)
let Subject = Model.Subject

class ControllerSubject{
    static findAll(req, res) {
        Subject.findAll().then((result) => {
            res.render(`subject.ejs`, {result})
        }).catch((err) => {
            res.send(err)
        });
    }

    static add(req, res) {
        Subject.create(req.body).then((result) => {
            res.redirect(`/subject`)
        }).catch((err) => {
            res.send(err)
        });
    }

    static delete(req, res) {
        Subject.destroy({
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
        Subject.update({
            subject_name: req.body.subject_name
        }, {
                where: {
                    id: req.params.id
                }
            }).then((result) => {
                res.redirect(`/subject`)
            }).catch((err) => {
                res.send(err)
            });
    }
}

module.exports = ControllerSubject