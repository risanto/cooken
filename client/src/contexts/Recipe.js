import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import host from '../host'

export const RecipeContext = createContext()

export const RecipeProvider = (props) => {

    // RANDOM RECIPES
    
    const [randomRecipes, setRandomRecipes] = useState(null)

    const getRandomRecipes = async () => {
        const { data } = await axios.get(`${host}/recipes/random`)

        return data
    }

    const generateNewRandomRecipes = () => {
        getRandomRecipes()
            .then(randomRecipes => setRandomRecipes(randomRecipes))
    }

    useEffect(() => {
        generateNewRandomRecipes()
    }, [])

    return (
        <RecipeContext.Provider value={{ randomRecipes, setRandomRecipes, generateNewRandomRecipes }}>
            {props.children}
        </RecipeContext.Provider>
    )
}
