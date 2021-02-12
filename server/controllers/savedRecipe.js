const { SavedRecipe } = require('../models')
const { ErrorHandler } = require('../helpers/error')

class SavedRecipeController {
    static async add(req, res, next) {
        try {
            const {
                recipeId, imageSrc, title
            } = req.query

            let savedRecipe = await SavedRecipe.create({
                recipeId, imageSrc, title, userId: req.user.id 
            })

            return res.status(200).json(savedRecipe)

        } catch (error) {
            next(error)
        }
    }

    static async findByUserId(req, res, next) {
        try {
            let savedRecipes = await SavedRecipe.findAll({
                where: {
                    userId: req.user.id
                }
            })

            if (savedRecipes) return res.status(200).json(savedRecipes)
            else {
                throw new ErrorHandler(404, 'No saved recipes found.')
            }

        } catch (error) {
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

module.exports = SavedRecipeController