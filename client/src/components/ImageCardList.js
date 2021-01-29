import React from 'react'
import ImageCard from './ImageCard'

const ImageCardList = ({ list }) => {
    console.log(list)
    return (
        <ul className="flex flex-wrap justify-center list-none">
        {list.map((item, index) => {
          return <ImageCard key={index} item={item} imageSrc={item.image} text={item.title} />;
        })}
      </ul>
    )
}

export default ImageCardList
