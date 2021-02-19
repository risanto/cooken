const { User } = require('../models')
const { ErrorHandler } = require('../helpers/error')
const { generateAccessToken, compareHash, validateEmail } = require('../helpers')

class UserController {
    static async register(req, res, next) {
        try {
            const {
                displayName, email, password
            } = req.body

            let user = await User.create({
                displayName, email, passwordHash: password
            })

            user = { id: user.id, name: user.displayName }

            return res.status(200).json({
                accessToken: generateAccessToken(user)
            })

        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const {
                email, password
            } = req.body

            if (!email || email.length < 1) {
                throw new ErrorHandler(400, 'Please enter an email address.')
            }

            if (!validateEmail(email)) {
                throw new ErrorHandler(400, 'Invalid email format.')
            }

            if (!password || password.length < 1) {
                throw new ErrorHandler(400, 'Please enter a password.')
            }

            let user = await User.findOne({
                where: { email: email }
            })

            let correctPassword

            if (user) {
                correctPassword = await compareHash(password, user?.passwordHash)
            }

            if (!user || !correctPassword) {
                throw new ErrorHandler(400, 'Incorrect email/password.')
            } else {
                user = { id: user.id, name: user.displayName }

                return res.status(200).json({
                    accessToken: generateAccessToken(user)
                })
            }


        } catch (error) {
            next(error)
        }
    }

    static async findById(req, res, next) {
        try {
            let user = await User.findByPk(req.user.id)

            user = {
                id: user.id, displayName: user.displayName, email: user.email, ingredientsStr: user.ingredientsStr
            }

            if (user) return res.status(200).json(user)
            else {
                throw new ErrorHandler(404, 'User not found.')
            }

        } catch (next) {
            next(error)
        }
    }

    static async update(req, res, next) {
        try {
            let updates = {}

            const {
                displayName, email, password
            } = req.body

            if (displayName) updates.displayName = displayName
            if (email) updates.email = email
            if (password) updates.passwordHash = password

            const user = await User.update(updates, {
                where: {
                    id: req.user.id
                },
                individualHooks: true
            })

            if (!user) throw new ErrorHandler(404, 'User not found.')

            if (user[0]) return res.sendStatus(200)
            else {
                throw new ErrorHandler(400, 'No fields to update.')
            }

        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const user = await User.destroy({
                where: {
                    id: req.user.id
                }
            })

            if (!user) throw new ErrorHandler(404, 'User not found.')

            if (user) return res.sendStatus(200)

        } catch (error) {
            next(error)
        }
    }

    static async updateIngredients(req, res, next) {
        try {
            const user = await User.update({ ingredientsStr: req.query.ingredientsStr }, {
                where: {
                    id: req.user.id
                }
            })

            if (!user) throw new ErrorHandler(404, 'User not found.')

            if (user[0]) return res.sendStatus(200)
            else {
                throw new ErrorHandler(400, 'Please input query ingredientsStr')
            }

        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController