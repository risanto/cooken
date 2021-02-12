const router = require('express').Router()
const UserController = require('../controllers/user')
const auth = require('../middlewares/auth')

// PUBLIC
router.post('/login', UserController.login)
router.post('/register', UserController.register)

// PRIVATE
router.use(auth)

router.put('/ingredients', UserController.updateIngredients)

router.get('/', UserController.findById)
router.put('/', UserController.update)
router.delete('/', UserController.delete)

module.exports = router