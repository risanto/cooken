const router = require('express').Router()
const UserController = require('../controllers/user')
const authenticate = require('../middlewares/authenticate')

// PUBLIC
router.get('/login', UserController.login)
router.post('/register', UserController.register)

// PRIVATE
router.use(authenticate)

router.get('/logout', UserController.logout)
router.post('/recipe', UserController.saveRecipe)
router.delete('/recipe/:recipeId', UserController.removeRecipe)
router.put('/ingredients', UserController.updateIngredients)

router.get('/:id', UserController.findById)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.delete)

module.exports = router