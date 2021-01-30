import React, { useState } from 'react'

const RecipeIngredientsDirections = ({ extendedIngredients, analyzedInstructions }) => {
    const [showIngredients, setShowIngredients] = useState(true)

    const toggleShowIngredients = (toggle) => {
        setShowIngredients(toggle)
    }

    const activeH2Classnames = "flex-1 inline-block py-1 text-base text-center text-red-500 border-b-2 border-red-500 bg-pink-50"

    const inactiveH2Classnames = "flex-1 inline-block py-1 text-base text-center text-gray-500 border-b-2 bg-gray-50"

    return (
        <section>
            <div className="flex justify-around">
                <h2
                    className={
                        showIngredients ? activeH2Classnames : inactiveH2Classnames
                    }
                    onClick={() => toggleShowIngredients(true)}
                >Ingredients</h2>
                <h2
                    className={
                        showIngredients ? inactiveH2Classnames : activeH2Classnames
                    }
                    onClick={() => toggleShowIngredients(false)}
                >Directions</h2>
            </div>
            <div className="flex flex-col justify-center mt-5 align-center">
                {showIngredients && extendedIngredients.map((ingredient, index) => {
                    return (
                        <div className="self-center w-1/2 mb-5">
                            <img className="inline-block w-8 mr-3" src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.image} />
                            <p className="self-center inline-block">{ingredient.original}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default RecipeIngredientsDirections
