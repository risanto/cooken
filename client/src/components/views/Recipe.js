import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RecipeContext } from '../../contexts/Recipe'

const Recipe = () => {
    const { id } = useParams()
    const { recipe, getRecipeById } = useContext(RecipeContext)

    useEffect(() => {
        getRecipeById(id)
    }, [])

    return (
        <div>
            {JSON.stringify(recipe, null, 2)}
        </div>
    )
}

export default Recipe
