import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const RecipeContext = createContext()

export const RecipeProvider = (props) => {

    // RANDOM RECIPES
    
    const [randomRecipes, setRandomRecipes] = useState([], [])

    const getRandomRecipes = async () => {
        const { data } = await axios.get('https://api.spoonacular.com/recipes/random?number=6&apiKey=d6303c32254c42c395dc107236387632')

        return data.recipes
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
