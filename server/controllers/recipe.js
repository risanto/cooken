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
            console.log(error)
            res.send(error)
        }
    }

    static async getSearch(req, res) {
        const { q, itemsPerPage, page } = req.query

        try {
            const link = `https://api.spoonacular.com/recipes/complexSearch?query=${q}&apiKey=${apiKey}&number=${itemsPerPage ? itemsPerPage : 9}&offset=${page ? page : 0}`
            console.log('GET', link)

            const { data } = await axios.get(link);
            res.send(data)

        } catch (error) {
            console.log(error)
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
            console.log(error)
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
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = RecipeController