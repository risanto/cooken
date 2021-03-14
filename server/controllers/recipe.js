const axios = require('axios')
const fs = require('fs')
const path = require('path')
const apiKey = process.env.API_KEY
const { redisClient } = require('../helpers')

const ingredientsPath = path.join(__dirname, '..', 'helpers', 'ingredients.csv')
const ingredientsCSV = fs.readFileSync(ingredientsPath, 'utf-8')

class RecipeController {
    static async getDailyRandom(req, res, next) {
        try {
            const cache = await redisClient.get('recipes:random:daily')

            if (!cache) {
                const link = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${req.query.number ? req.query.number : 6}`
                console.log('GET', link)

                const { data } = await axios.get(link)
                redisClient.setex('recipes:random:daily', 86400, JSON.stringify(data))

                res.send(data.recipes)
            } else {
                res.send(JSON.parse(cache, null, 2))
            }

        } catch (error) {
            next(error)
        }
    }

    static async getRandom(req, res, next) {
        try {
            const link = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${req.query.number ? req.query.number : 6}`
            console.log('GET', link)

            const { data } = await axios.get(link)

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
            const cache = await redisClient.get(`recipes#${req.params.id}`)

            if (!cache) {
                const link = `https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${apiKey}`
                console.log('GET', link)
    
                const { data } = await axios.get(link)
                edisClient.setex(`recipes#${req.params.id}`, 86400, JSON.stringify(data))

                res.send(data)
            } else {
                res.send(cache)
            }

        } catch (error) {
            next(error)
        }
    }

    static async autocompleteIngredient(req, res, next) {
        try {
            const ingredients = ingredientsCSV.split('\n').reduce((filtered, ingredient) => {
                ingredient = ingredient.split(';')[0]

                if (ingredient.includes(req.query.q)) {
                    filtered.push({ name: ingredient })
                }
                return filtered
            }, [])

            res.send(ingredients)

            // USING API
            // const link = `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${apiKey}&query=${req.query.q}`
            // const { data } = await axios.get(link);
            // console.log('GET', link)
            // res.send(data)

        } catch (error) {
            next(error)
        }
    }
}

module.exports = RecipeController