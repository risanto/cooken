import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../contexts/User'
import { toastError, groupRecipesBy } from '../helpers'
import ImageCardList from './ImageCardList'
import SkeletonImageCardList from './SkeletonImageCardList'

const RecipesICanMake = (props) => {
    const { recipeGroups } = props
    // console.log(recipeGroups)
    // const [recipeGroups, setRecipeGroups] = useState([])

    // useEffect(() => {
    //     findByIngredients()
    //         .then(data => {
    //             const grouped = groupRecipesBy(data, 'usedIngredientCount', 'desc')
    //             setRecipeGroups(grouped)
    //         })
    //         .catch(err => {
    //             toastError(err)
    //         })
    // }, [])

    return (
        <section className="mt-8">
            {!!recipeGroups.length && recipeGroups.map((recipeGroup, idx) => {
                return <div
                    className="px-2 py-8 bg-white rounded-lg"
                    key={idx}
                >
                    <h2 className="font-bold text-center">Recipes that match {recipeGroup.usedIngredientCount} of your ingredients</h2>
                    <ImageCardList list={recipeGroup.recipes} />
                </div>
            })}

            {!recipeGroups.length && (
                <SkeletonImageCardList />
            )}

        </section>
    )
}

export default RecipesICanMake
