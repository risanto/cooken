const router = require('express').Router()

router.use('/recipes', require('./recipes'))
router.use('/user', require('./user'))

module.exports = router