let router = require(`express`).Router()
let Controller = require(`../controllers/controllerStudent`)
let bodyParser = require(`body-parser`)

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

/*TODO:
`/` => GET ALL STUDENT
`/add` => ADD STUDENT
`/edit` => EDIT STUDENT
`/delete` => DELETE STUDENT
*/

//READ ALL
router.get(`/`, function(req, res) {
    Controller.findAll(req, res)
})

//ADD
router.get(`/add`, function(req, res) {
    res.render(`./add/addStudent.ejs`)
})

router.post(`/add`, function(req, res) {
    Controller.add(req, res)
})

//DELETE
router.get(`/delete/:id`, function(req, res) {
    Controller.delete(req, res)
})

//EDIT
router.get(`/edit/:id`, function(req, res) {
    res.render(`./edit/editStudent.ejs`, {
        id: req.params.id
    })
})

router.post(`/executeEditStudent/:id`, function(req, res) {
    Controller.edit(req, res)
})

module.exports = router