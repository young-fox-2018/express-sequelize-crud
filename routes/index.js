const router        = require ('express').Router()
const teacher       = require ('./teacher.js')
const student       = require ('./student.js')
const subject       = require ('./subject.js')


router.get('/', function (req, res) {
    res.render('index.ejs')
})

router.use('/teacher' ,teacher)
router.use('/student' ,student)
router.use('/subject' ,subject)

module.exports = router
