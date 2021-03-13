const axios = require('axios')
const apiKey = process.env.API_KEY
const { redisClient } = require('../helpers')

class RecipeController {
    static async getRandom(req, res, next) {
        try {
            const link = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${req.query.number ? req.query.number : 6}`
            console.log('GET', link)

            const { data } = await axios.get(link)
            redisClient.setex('randomRecipes', 86400, JSON.stringify(data))
            
            res.send(data.recipes)

        } catch (error) {
            next(error)
        }
    }

    static async search(req, res, next) {
        const { q, itemsPerPage, page } = req.query

        try {
            const link = `https://api.spoonacular.com/recipes/complexSearch?query=${q}&apiKey=${apiKey}&number=${itemsPerPage ? itemsPerPage : 10}&offset=${page ? page : 0}`
            console.log('GET', link)

            const { data } = await axios.get(link);
            res.send(data)

        } catch (error) {
            next(error)
        }
    }

    static async findByIngredients(req, res, next) {
        try {
            const link = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${req.query.q}&apiKey=${apiKey}`
            console.log('GET', link)

            const { data } = await axios.get(link);
            res.send(data)

        } catch (error) {
            next(error)
        }
    }

    static async findById(req, res, next) {
        try {
            const link = `https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${apiKey}`
            console.log('GET', link)

            const { data } = await axios.get(link);
            res.send(data)

        } catch (error) {
            next(error)
        }
    }

    static async autocompleteIngredient(req, res, next) {
        try {
            const link = `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${apiKey}&query=${req.query.q}`
            console.log('GET', link)

            const { data } = await axios.get(link);
            res.send(data)

        } catch (error) {
            next(error)
        }
    }
}

module.exports = RecipeController