import React from 'react'

const ImageCard = ({ imageSrc, text }) => {
    return (
        <div className="shadow transform hover:scale-105 cursor-pointer hover:shadow-xl m-2 md:m-4 w-28 md:w-1/4 rounded-t-lg rounded-b-xl">
            <img className="rounded-t-lg" src={imageSrc} />
            <p className="block rounded-b-xl bg-red-500 text-xs text-white text-center py-1 md:py-2 px-3 font-bold truncate">{text}</p>
        </div>
    )
}

export default ImageCard
