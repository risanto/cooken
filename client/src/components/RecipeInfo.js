import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../contexts/User'
import { toastDefault, toastError } from '../helpers'

const RecipeInfo = ({ readyInMinutes, servings, vegetarian, vegan, glutenFree, dairyFree, recipeId, imageSrc, text }) => {

    const { isAuthenticated, saveRecipe, savedRecipes, fetchSavedRecipes, removeFromSavedRecipes } = useContext(UserContext)

    const handleSaveRecipe = e => {
        e.stopPropagation()
        saveRecipe(recipeId, imageSrc, text)
            .then(_ => fetchSavedRecipes())
            .then(_ => {
                toastDefault('Recipe saved.')
            })
            .catch(err => {
                toastError(err.messages[0])
            })
    }

    const handleRemoveRecipe = e => {
        e.stopPropagation()
        removeFromSavedRecipes(recipeId)
            .then(_ => fetchSavedRecipes())
            .then(_ => {
                toastDefault('Removed from saved recipes.')
            })
            .catch(err => {
                toastError(err.messages[0])
            })
    }

    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        if (savedRecipes.find(el => el.recipeId === recipeId)) {
            setIsSaved(true)
        } else setIsSaved(false)
    }, [savedRecipes, recipeId])

    return (
        <section className="flex flex-wrap justify-center p-3 mt-2 text-sm flexContainer w-13/16 align-center">
            <span className="flex justify-center align-center">
                <img src="../hourglass.png" className="inline-block w-4 mb-2 mr-2" alt="hourglass" />
                <p className="inline-block mb-2 mr-3">{readyInMinutes} minutes </p>
            </span>

            <span className="flex justify-center align-center">
                <img src="/serving.png" className="inline-block w-4 mb-2 mr-2" alt="serving" />
                <p className="inline-block mb-2 mr-3">{servings} servings</p>
            </span>

            {glutenFree && (
                <span className="flex justify-center align-center">
                    <img src="/gluten-free.png" className="inline-block w-5 h-5 mb-2 mr-2" alt="gluten-free" />
                    <p className="inline-block mb-2 mr-3">gluten-free </p>
                </span>
            )}

            {dairyFree && (
                <span className="flex justify-center align-center">
                    <img src="/dairy-free.png" className="inline-block w-5 h-5 mb-2 mr-2" alt="dairy-free" />
                    <p className="inline-block mb-2 mr-3">dairy-free </p>
                </span>
            )}

            {vegan && (
                <span className="flex justify-center align-center">
                    <img src="/vegan.png" className="inline-block w-5 h-5 mb-2 mr-2" alt="vegan" />
                    <p className="inline-block mb-2 mr-3">vegan </p>
                </span>
            )}

            {vegetarian && (
                <span className="flex justify-center align-center">
                    <img src="/vegetarian.png" className="inline-block w-5 h-5 mb-2 mr-2" alt="vegetarian" />
                    <p className="inline-block mb-2 mr-3">vegetarian </p>
                </span>
            )}

            {/* Save recipe */}
            {isAuthenticated && !isSaved && (
                <img
                    alt="save recipe"
                    onClick={handleSaveRecipe}
                    className="absolute top-0 right-0 transform no-flicker hover:-translate-y-1"
                    src="/save-icon.svg"
                />
            )}

            {/* Remove recipe */}
            {isAuthenticated && isSaved && (
                <img
                    alt="remove recipe"
                    onClick={handleRemoveRecipe}
                    className="absolute top-0 right-0 transform no-flicker hover:-translate-y-1"
                    src="/saved-icon.svg"
                />
            )}
        </section>
    )
}

export default RecipeInfo
