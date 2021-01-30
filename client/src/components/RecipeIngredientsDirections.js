import React, { useState } from 'react'

const RecipeIngredientsDirections = ({ extendedIngredients, analyzedInstructions }) => {
    const [showIngredients, setShowIngredients] = useState(true)

    const toggleShowIngredients = (toggle) => {
        setShowIngredients(toggle)
    }

    const activeH2Classnames = "cursor-pointer flex-1 inline-block py-1 text-base text-center text-red-500 border-b-2 border-red-500 bg-pink-50"

    const inactiveH2Classnames = "cursor-pointer flex-1 inline-block py-1 text-base text-center text-gray-500 border-b-2 bg-gray-50"

    return (
        <section id="recipe-ingredients-or-directions">

            {/* Ingredients / Directions */}
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

                {/* Ingredients list */}
                {showIngredients && extendedIngredients.map((ingredient, index) => {
                    return (
                        <div className="grid self-center w-2/3 grid-cols-3 mb-5">
                            <img className="inline-block h-12 col-span-1 mr-3 place-self-center" src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.image} />
                            <p className="self-center inline-block col-span-2">{ingredient.original}</p>
                        </div>
                    )
                })}

                {/* Directions list */}
                {!showIngredients && analyzedInstructions[0].steps.map((instruction, index) => {
                    return (
                        <span className="flex mx-10 mb-2">
                            <p className="relative inline-block mr-2 font-bold text-red-500 right-1">
                                {instruction.number}.
                            </p>
                            <p className="inline-block">{instruction.step}</p>
                        </span>
                    )
                })}
            </div>
        </section>
    )
}

export default RecipeIngredientsDirections
