const { User } = require('../models')

class RecipeController {
    static async register(req, res, next) {
        try {
            const {
                username, displayName, email, password
            } = req.body

            const user = await User.create({
                username, displayName, email, passwordHash: password
            })

            res.send(user)
            

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

        } catch (error) {
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

module.exports = RecipeController