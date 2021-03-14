const router = require('express').Router()

router.use('/recipes', require('./recipes'))
router.use('/user', require('./user'))
router.use('/savedRecipes', require('./savedRecipes'))
router.get('/', (req, res) => {
    res.send('Just initial endpoint, nothing going on here...')
})

module.exports = router