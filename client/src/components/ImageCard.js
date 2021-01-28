import React from 'react'

const ImageCard = ({ imageSrc, text }) => {
    return (
        <div className="image-card shadow transform hover:-translate-y-2 cursor-pointer hover:shadow-xl m-2 md:m-4 w-28 md:w-1/4 rounded-t-lg rounded-b-xl">
            <img className={"rounded-t-lg h-20"} src={imageSrc ? imageSrc : 'chef-hat-icon-wide.png'}/>

            {/* VERSION 1 */}
            <p className="block rounded-b-xl bg-red-500 text-xs text-white text-center py-1 md:py-2 px-3 font-bold truncate">{text}</p>

            {/* VERSION 2 */}
            {/* <p className="image-card-text block rounded-b-xl text-xs text-red-500 text-center py-1 md:py-2 px-3 font-bold truncate">{text}</p> */}
        </div>
    )
}

export default ImageCard
