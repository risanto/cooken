import React, { createContext } from 'react'
import { processError } from '../helpers'
import axios from 'axios'
import host from '../host'

export const RecipeContext = createContext()

export const RecipeProvider = (props) => {

    const getDailyRandomRecipes = async () => {
        try {
            const { data } = await axios.get(`${host}/recipes/dailyRandom`)
            return data

        } catch (error) {
            throw processError(error)
        }
    }

    const getRandomRecipes = async () => {
        try {
            const { data } = await axios.get(`${host}/recipes/random`)
            return data

        } catch (error) {
            throw processError(error)
        }
    }

    const getRecipeById = async (id) => {
        try {
            const { data } = await axios.get(`${host}/recipes/${id}`)
            return data

        } catch (error) {
            throw processError(error)
        }
    }

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

    const autocompleteIngredient = async (query) => {
        try {
            let link = `${host}/recipes/autocompleteIngredient?q=${query}`

            const { data } = await axios.get(link)

            return data

        } catch (error) {
            throw processError(error)
        }
    }

    return (
        <RecipeContext.Provider value={{ getRandomRecipes, getRecipeById, searchRecipes, autocompleteIngredient, getDailyRandomRecipes }}>
            {props.children}
        </RecipeContext.Provider>
    )
}
