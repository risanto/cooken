import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RecipeContext } from '../../contexts/Recipe'

import RecipeInfo from '../RecipeInfo'
import RecipeIngredientsDirections from '../RecipeIngredientsDirections'
import Nav from '../Nav'
import SkeletonRecipe from '../SkeletonRecipe'
import { toastError } from '../../helpers'

const Recipe = () => {
    const { id } = useParams()

    const [recipe, setRecipe] = useState(null)
    const { getRecipeById } = useContext(RecipeContext)

    useEffect(() => {
        getRecipeById(id)
            .then(recipeData => {
                setRecipe(recipeData)
            })
            .catch(err => {
                toastError(err)
            })
    }, [getRecipeById, id])

    return (
        <>
            <Nav showLogo={true}/>
            {!recipe && <SkeletonRecipe/>}
            {!!recipe && (
                <main className="mb-auto">
                    <div style={{
                        backgroundImage: `url(${recipe.image})`
                    }} className="bg-fixed bg-top bg-no-repeat bg-indigo-10 h-80"></div>

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
                            recipeId={recipe.id}
                            imageSrc={recipe.image}
                            text={recipe.title}
                        />
                        <RecipeIngredientsDirections
                            extendedIngredients={recipe.extendedIngredients}
                            analyzedInstructions={recipe.analyzedInstructions}
                        />
                    </div>
                </main>
            )}
        </>
    )
}

export default Recipe
