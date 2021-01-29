import React from 'react'
import { Link } from 'react-router-dom'

const ImageCard = ({ imageSrc, text, linkTo }) => {
    return (
        <Link to={linkTo} className="inline-block shadow transform hover:-translate-y-2 cursor-pointer hover:shadow-xl m-2 md:m-4 rounded-t-lg rounded-b-xl w-1/3 md:w-1/4">
            <li className="">
                <img className={"rounded-t-lg w-full object-fit"} src={imageSrc ? imageSrc : 'chef-hat-icon-wide.png'} alt={text.split(' ').join('-')} />

                {/* VERSION 1 */}
                <p className="block rounded-b-xl bg-red-500 text-xs text-white text-center py-1 md:py-2 px-3 font-bold truncate">{text}</p>

                {/* VERSION 2 */}
                {/* <p className="image-card-text block rounded-b-xl text-xs text-red-500 text-center py-1 md:py-2 px-3 font-bold truncate">{text}</p> */}
            </li>
        </Link>
    )
}

export default ImageCard
