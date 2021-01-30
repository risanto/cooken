import React from 'react'
import ImageCard from './ImageCard'

const ImageCardList = ({ list }) => {
    return (
        <ul className="flex flex-wrap justify-center list-none">
            {list.map((item, index) => {
                return <ImageCard key={index} item={item} imageSrc={item.image} text={item.title} linkTo={`recipes/${item.id}`} />;
            })}
        </ul>
    )
}

export default ImageCardList
