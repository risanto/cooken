import React from 'react'

const ImageCard = ({ imageSrc, text }) => {
    return (
        <div className="">
            <img className="rounded-t-lg" src={imageSrc} />
            <p className="bg-red-500 text-xs text-white text-center p-2 font-bold rounded-b-xl">{text}</p>
        </div>
    )
}

export default ImageCard
