import React, { useContext } from 'react'
import ImageCard from './ImageCard'
import { RecipeContext } from '../contexts/Recipe'

const ImageCardList = ({ list }) => {
    const { getRecipeById } = useContext(RecipeContext)
    console.log(list)

    return (
        <ul className="flex flex-wrap justify-center list-none">
            {list.map((item, index) => {
                return <ImageCard key={index} item={item} imageSrc={item.image} text={item.title} onClick={() => getRecipeById(item.id)} />;
            })}
        </ul>
    )
}

export default ImageCardList
