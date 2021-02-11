const { User } = require('../models')
const { generateAccessToken } = require('../helpers/jwt')

class UserController {
    static async register(req, res, next) {
        try {
            const {
                displayName, email, password
            } = req.body

            // TODO: validate email => should be unique, work on model validations

            let user = await User.create({
                displayName, email, passwordHash: password
            })

            user = { id: user.id, name: user.displayName, email: user.email }

            res.status(200).json({
                accessToken: generateAccessToken(user)
            })

        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {

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