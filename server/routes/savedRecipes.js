const router = require('express').Router()
const SavedRecipeController = require('../controllers/savedRecipe')
const auth = require('../middlewares/auth')

router.use(auth)
router.delete('/:id', SavedRecipeController.delete)
router.get('/', SavedRecipeController.findByUserId)
router.post('/', SavedRecipeController.add)

module.exports = router