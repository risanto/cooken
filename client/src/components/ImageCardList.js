import React from 'react'
import ImageCard from './ImageCard'

const ImageCardList = ({ list, savedRecipes }) => {
    return (
        <div className="flex flex-wrap justify-center mt-2 list-none">
            {list.map((item, index) => {
                if (savedRecipes) {
                    item.id = item.recipeId
                }
                
                return item.invisible
                    ? <ImageCard extraClasses={"invisible"} key={index} item={item} imageSrc={item.image ||item.imageSrc} text={item.title} linkTo={`/recipes/${item.id}`} />

                    : <ImageCard extraClasses={"place-self-center"} key={index} item={item} imageSrc={item.image ||item.imageSrc} text={item.title} recipeId={item.id} linkTo={`/recipes/${item.id}`}/>
            })}
        </div>
    )
}

export default ImageCardList
