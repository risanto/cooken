import React, { createContext } from 'react'
import axios from 'axios'
import host from '../host'

export const RecipeContext = createContext()

export const RecipeProvider = (props) => {

    // RANDOM RECIPES

    const getRandomRecipes = async () => {
        try {
            const { data } = await axios.get(`${host}/recipes/random`)
            return data

        } catch (error) {
            let err = new Error()
            let message = error.response.data.messages[0]

            if (message.includes('402')) {
                message = "Sorry for the inconvenience, I'm using Spoonacular's free plan and the daily points limit of 150 API calls has already been reached :(" 
            }

            err.message = message

            throw err
        }
    }


    // RECIPES BY ID

    const getRecipeById = async (id) => {
        try {
            const { data } = await axios.get(`${host}/recipes/${id}`)
            return data

        } catch (error) {
            throw error.response.data.messages
        }
    }

    // SEARCH RECIPES

    const searchRecipes = async (query, itemsPerPage, page) => {
        try {
            let link = `${host}/recipes/search?q=${query}`

            if (itemsPerPage) link += '&itemsPerPage=' + itemsPerPage

            if (page) link += `&page=` + page

            const { data } = await axios.get(link)

            return data

        } catch (error) {
            throw error.response.data.messages
        }
    }

    // AUTOCOMPLETE INGREDIENT

    const autocompleteIngredient = async (query) => {
        try {
            let link = `${host}/recipes/autocompleteIngredient?q=${query}`

            const { data } = await axios.get(link)

            return data

        } catch (error) {
            let err = new Error()
            let message = error.response.data.messages[0]

            if (message.includes('402')) {
                message = "Sorry for the inconvenience, I'm using Spoonacular's free plan and the daily points limit of 150 API calls has already been reached :(" 
            }

            err.message = message

            throw err
        }
    }

    return (
        <RecipeContext.Provider value={{ getRandomRecipes, getRecipeById, searchRecipes, autocompleteIngredient }}>
            {props.children}
        </RecipeContext.Provider>
    )
}
