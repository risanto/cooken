const router = require('express').Router()

router.use('/recipes', require('./recipes'))
router.use('/user', require('./user'))
router.use('/savedRecipes', require('./savedRecipes'))

module.exports = router