const router = require('express').Router()
const RecipeController = require('../controllers/recipe')

router.get('/random', RecipeController.getRandom)
router.get('/search', RecipeController.search)
router.get('/findByIngredients', RecipeController.findByIngredients)
router.get('/autocompleteIngredient', RecipeController.autocompleteIngredient)
router.get('/:id', RecipeController.findById)

module.exports = router