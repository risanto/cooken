const router = require('express').Router()

router.use('/recipes', require('./recipes'))
router.use('/users', require('./users'))

module.exports = router