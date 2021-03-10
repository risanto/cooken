import React from 'react'
import ImageCardList from './ImageCardList'
import SkeletonImageCardList from './SkeletonImageCardList'

const RecipesICanMake = (props) => {
    const { recipeGroups } = props

    return (
        <section className="mt-8">
            {!!recipeGroups.length && recipeGroups.map((recipeGroup, idx) => {
                return <div
                    className="py-8 bg-white rounded-lg lg:px-40 xl:px-80"
                    key={idx}
                >
                    <h2 className="font-bold text-center">Recipes that match {recipeGroup.usedIngredientCount} of your ingredient(s)</h2>
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
