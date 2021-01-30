import React from 'react'

const RecipeInfo = ({ readyInMinutes, servings, vegetarian, vegan, glutenFree, dairyFree }) => {
    return (
        <section className="flex flex-wrap justify-center p-3 text-sm flexContainer w-13/16 align-center">
            <img src="../hourglass.png" className="w-4 mb-2 mr-2" />
            <p className="mb-2 mr-3">{readyInMinutes} minutes </p>

            <img src="../serving.png" className="w-4 mb-2 mr-2" />
            <p className="mb-2 mr-3">{servings} servings</p>

            {glutenFree && (
                <>
                    <img src="../gluten-free.png" className="w-5 h-5 mb-2 mr-2" />
                    <p className="mb-2 mr-3">gluten-free </p>
                </>
            )}

            {glutenFree && (
                <>
                    <img src="../dairy-free.png" className="w-5 h-5 mb-2 mr-2" />
                    <p className="mb-2 mr-3">dairy-free </p>
                </>
            )}
        </section>
    )
}

export default RecipeInfo
