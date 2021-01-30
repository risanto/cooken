import React from 'react'

const RecipeInfo = ({ readyInMinutes, servings, vegetarian, vegan, glutenFree, dairyFree }) => {
    return (
        <section className="flex flex-wrap justify-center p-3 mt-2 text-sm flexContainer w-13/16 align-center">
            <span className="flex justify-center align-center">
                <img src="../hourglass.png" className="inline-block w-4 mb-2 mr-2" alt="hourglass"/>
                <p className="inline-block mb-2 mr-3">{readyInMinutes} minutes </p>
            </span>

            <span className="flex justify-center align-center">
                <img src="../serving.png" className="inline-block w-4 mb-2 mr-2" alt="serving"/>
                <p className="inline-block mb-2 mr-3">{servings} servings</p>
            </span>

            {glutenFree && (
                <span className="flex justify-center align-center">
                    <img src="../gluten-free.png" className="inline-block w-5 h-5 mb-2 mr-2" alt="gluten-free"/>
                    <p className="inline-block mb-2 mr-3">gluten-free </p>
                </span>
            )}

            {dairyFree && (
                <span className="flex justify-center align-center">
                    <img src="../dairy-free.png" className="inline-block w-5 h-5 mb-2 mr-2" alt="dairy-free"/>
                    <p className="inline-block mb-2 mr-3">dairy-free </p>
                </span>
            )}
        </section>
    )
}

export default RecipeInfo
