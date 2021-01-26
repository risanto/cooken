const axios = require('axios')
const apiKey = process.env.API_KEY

class RecipeController {
    static async getRandom(req, res) {
        try {
            const link = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${req.query.number ? req.query.number : 6}`
            console.log('GET', link)

            const { data } = await axios.get(link);
            res.send(data.recipes)

        } catch (error) {
            res.send(error)
        }
    }

    static async getSearch(req, res) {
        try {
            const link = `https://api.spoonacular.com/recipes/complexSearch?query=${req.query.q}&apiKey=${apiKey}`
            console.log('GET', link)

            const { data } = await axios.get(link);
            res.send(data.results)

        } catch (error) {
            res.send(error)
        }
    }

    static async getFindByIngredients(req, res) {
        try {
            const link = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${req.query.q}&apiKey=${apiKey}`
            console.log('GET', link)

            const { data } = await axios.get(link);
            res.send(data)

        } catch (error) {
            res.send(error)
        }
    }

    static async getFindById(req, res) {
        try {
            const link = `https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${apiKey}`
            console.log('GET', link)

            const { data } = await axios.get(link);
            res.send(data)

        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = RecipeController