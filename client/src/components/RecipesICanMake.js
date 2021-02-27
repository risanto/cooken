import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../contexts/User'
import { toastError, groupRecipesBy } from '../helpers'
import ImageCardList from './ImageCardList'
import SkeletonImageCardList from './SkeletonImageCardList'

const RecipesICanMake = () => {
    const { findByIngredients } = useContext(UserContext)
    const [recipeGroups, setRecipeGroups] = useState([])

    useEffect(() => {
        findByIngredients()
            .then(data => {
                const grouped = groupRecipesBy(data, 'usedIngredientCount', 'desc')
                setRecipeGroups(grouped)
            })
            .catch(err => {
                toastError(err)
            })
    }, [])

    return (
        <section className="">
            {!!recipeGroups.length && recipeGroups.map((recipeGroup, idx) => {
                return <div
                    className="p-2 mt-8 bg-white rounded-lg"
                    key={idx}
                >
                    <h2 className="mt-4 text-center">Recipes that match your {recipeGroup.usedIngredients} ingredients</h2>
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
