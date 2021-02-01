import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import host from '../host'

export const RecipeContext = createContext()

export const RecipeProvider = (props) => {

    // RANDOM RECIPES

    const [randomRecipes, setRandomRecipes] = useState([])

    const getRandomRecipes = async () => {
        const { data } = await axios.get(`${host}/recipes/random`)
        return data
    }

    const generateNewRandomRecipes = () => {
        getRandomRecipes()
            .then(randomRecipes => setRandomRecipes(randomRecipes))
    }

    // RECIPES BY ID

    const [recipe, setRecipe] = useState(null)

    const getRecipeById = async (id) => {
        const { data } = await axios.get(`${host}/recipes/${id}`)
        setRecipe(data)
    }

    // SEARCH RECIPES

    const searchRecipes = async (query) => {
        try {
            const { data } = await axios.get(`${host}/recipes/search?q=${query}`)
            return data

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <RecipeContext.Provider value={{ randomRecipes, setRandomRecipes, generateNewRandomRecipes, recipe, setRecipe, getRecipeById, searchRecipes }}>
            {props.children}
        </RecipeContext.Provider>
    )
}
