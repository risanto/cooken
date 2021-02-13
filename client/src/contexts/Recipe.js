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
            console.log(error)
        }
    }


    // RECIPES BY ID

    const getRecipeById = async (id) => {
        try {
            const { data } = await axios.get(`${host}/recipes/${id}`)
            return data
            
        } catch (error) {
            console.log(error)
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
            console.log(error)
        }
    }

    return (
        <RecipeContext.Provider value={{ getRandomRecipes, getRecipeById, searchRecipes }}>
            {props.children}
        </RecipeContext.Provider>
    )
}
