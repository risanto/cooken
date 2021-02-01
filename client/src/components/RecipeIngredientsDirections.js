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
            {/* Small to medium screen */}
            <div className="lg:hidden">
                <div className="flex justify-around">
                    {/* Ingredients / Directions */}
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
                            <div key={index} className="grid self-center w-2/3 grid-cols-3 mb-5">
                                <img className="inline-block h-12 col-span-1 mr-3 place-self-center" src={ingredient.image ? `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}` : 'ingredient-placeholder.png'} alt={ingredient.image || 'ingredient'} />
                                <p className="self-center inline-block col-span-2">{ingredient.original}</p>
                            </div>
                        )
                    })}

                    <div className="self-center sm-500:w-2/3">
                        {/* Directions list */}
                        {!showIngredients && analyzedInstructions[0].steps.map((instruction, index) => {
                            return (
                                <span key={index} className="grid grid-cols-10 mx-5 mb-4">
                                    <p className="inline-block col-span-1 mr-2 font-bold text-red-500">
                                        {instruction.number}.
                            </p>
                                    <p className="inline-block col-span-9">{instruction.step}</p>
                                </span>
                            )
                        })}
                    </div>

                </div>
            </div>

            {/* Big screen */}
            <div className="hidden w-3/4 mx-auto my-0 lg:block vertical-mid-line">
                <div className="flex justify-center">
                    {/* Ingredients / Directions */}
                    <h2
                        className="inline-block px-10 py-1 text-base text-center text-red-500 bg-pink-50"
                    >Ingredients</h2>
                    <h2
                        className="inline-block px-10 py-1 text-base text-center text-purple-500 bg-purple-50"
                    >Directions</h2>
                </div>

                <div className="grid grid-cols-2 mt-5">
                    <div className="col-span-1">
                        {/* Ingredients list */}
                        {extendedIngredients.map((ingredient, index) => {
                            return (
                                <div key={index} className="grid grid-cols-5 mx-10 mb-5">
                                    <img className="inline-block h-12 col-span-1 col-start-2 mr-3 place-self-center" src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.image} />
                                    <p className="self-center inline-block col-span-3">{ingredient.original}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="col-span-1">
                        {/* Directions list */}
                        {analyzedInstructions[0].steps.map((instruction, index) => {
                            return (
                                <span key={index} className="grid grid-cols-10 col-span-1 mx-10 mb-4">
                                    <p className="inline-block col-span-1 mr-2 font-bold text-red-500 justify-self-end ">
                                        {instruction.number}.
                            </p>
                                    <p className="inline-block col-span-8">{instruction.step}</p>
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default RecipeIngredientsDirections
