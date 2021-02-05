import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RecipeContext } from '../../contexts/Recipe'

import RecipeInfo from '../RecipeInfo'
import RecipeIngredientsDirections from '../RecipeIngredientsDirections'
import Nav from '../Nav2'
import SkeletonRecipe from '../SkeletonRecipe'

const Recipe = () => {
    const { id } = useParams()
    const { recipe, getRecipeById } = useContext(RecipeContext)

    useEffect(() => {
        getRecipeById(id)
    }, [])

    return (
        <>
            <Nav />
            {!recipe && <SkeletonRecipe/>}
            {recipe && (
                <>
                    <div style={{
                        backgroundImage: `url(${recipe.image})`
                    }} className="bg-fixed bg-top bg-no-repeat h-80"></div>

                    <h1 className="relative px-6 pt-1 pb-8 text-xl text-center text-white bottom-4 rounded-tl-xl bg-gradient-to-r from-red-600 via-red-500 to-pink-500">{recipe.title}</h1>

                    <div className="relative pb-8 pl-6 text-xl bg-white bottom-11 rounded-tl-xl">
                    </div>

                    <div className="relative bottom-20">
                        <RecipeInfo
                            readyInMinutes={recipe.readyInMinutes}
                            servings={recipe.servings}
                            vegetarian={recipe.vegetarian}
                            vegan={recipe.vegan}
                            glutenFree={recipe.glutenFree}
                            dairyFree={recipe.dairyFree}
                        />
                        <RecipeIngredientsDirections
                            extendedIngredients={recipe.extendedIngredients}
                            analyzedInstructions={recipe.analyzedInstructions}
                        />
                    </div>
                </>
            )}
        </>
    )
}

export default Recipe
