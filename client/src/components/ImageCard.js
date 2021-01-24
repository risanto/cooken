import React from 'react'

const ImageCard = ({ imageSrc, text }) => {
    return (
        <div className="p-2 md:p-4 w-1/2 md:w-1/3">
            <img className="rounded-t-lg" src={imageSrc} />
            <p className="block bg-red-500 text-xs text-white text-center py-1 md:py-2 px-3 font-bold rounded-b-xl truncate">{text}</p>
        </div>
    )
}

export default ImageCard
