const { SavedRecipe } = require('../models')
const { ErrorHandler } = require('../helpers/error')

class SavedRecipeController {
    static async add(req, res, next) {
        try {
            const {
                recipeId, imageSrc, title
            } = req.query

            let previousSavedRecipe = await SavedRecipe.findOne({
                where: {
                    recipeId: +recipeId,
                    userId: +req.user.id
                }
            })

            if (previousSavedRecipe) throw new ErrorHandler(409, 'You already saved this recipe.')

            let savedRecipe = await SavedRecipe.create({
                recipeId, imageSrc, title, userId: +req.user.id
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
                    userId: +req.user.id
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

    static async delete(req, res, next) {
        try {
            const savedRecipe = await SavedRecipe.destroy({
                where: {
                    id: +req.params.id,
                    userId: +req.user.id
                }
            })

            if (!savedRecipe) throw new ErrorHandler(404, 'Recipe not found among your saved recipes.')

            if (savedRecipe) return res.sendStatus(200)

        } catch (error) {
            next(error)
        }
    }
}

module.exports = SavedRecipeController