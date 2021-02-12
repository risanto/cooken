const router = require('express').Router()
const UserController = require('../controllers/user')
const auth = require('../middlewares/auth')
const protectUserCooken = require('../middlewares/protectUserCooken')

// PUBLIC
router.post('/login', UserController.login)
router.post('/register', UserController.register)

// PRIVATE
router.use(auth)

router.patch('/ingredients', UserController.updateIngredients)
router.get('/', UserController.findById)

//protect dummy account from being updated or deleted
router.use(protectUserCooken) 

router.patch('/', UserController.update)
router.delete('/', UserController.delete)

module.exports = router