const router = require('express').Router()
const RecipeController = require('../controllers/recipe')

router.get('/random', RecipeController.getRandom)
router.get('/search', RecipeController.getSearch)
router.get('/findByIngredients', RecipeController.getFindByIngredients)
router.get('/autocompleteIngredient', RecipeController.autocompleteIngredient)
router.get('/:id', RecipeController.getFindById)

module.exports = router