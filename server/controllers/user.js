const { User } = require('../models')
const { ErrorHandler } = require('../helpers/error')
const { generateAccessToken } = require('../helpers/jwt')
const { compareHash } = require('../helpers/bcrypt')

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

            let user = await User.findOne({
                where: { email: email }
            })

            const correctPassword = await compareHash(password, user.passwordHash)

            if (
                !user || !correctPassword
            ) {
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

    static async logout(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }

    static async findById(req, res, next) {
        try {


        } catch (next) {
            next(error)
        }
    }

    static async update(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }

    static async saveRecipe(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }

    static async removeRecipe(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }

    static async updateIngredients(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController