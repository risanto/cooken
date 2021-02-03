import React from 'react'
import { Link } from 'react-router-dom'

const ImageCard = ({ imageSrc, text, linkTo, extraClasses }) => {
    return (
        <Link to={linkTo} className={"inline-block w-3/4 m-2 transform rounded-t-lg shadow cursor-pointer no-flicker hover:-translate-y-2 hover:shadow-xl md:m-4 rounded-b-xl sm-500:w-2/5 md:w-1/4 image-card " + extraClasses }>
            <li className="">
                <img className={"rounded-t-lg w-full"} src={imageSrc ? imageSrc : 'chef-hat-icon-wide.png'} alt={text.split(' ').join('-')} loading="lazy"/>

                {/* VERSION 1 */}
                {/* <p className="block px-4 py-2 text-sm text-center text-white truncate rounded-b-xl bg-gradient-to-r from-red-600 via-red-500 to-pink-500 sm-500:py-1">{text}</p> */}

                {/* VERSION 2 */}
                <p className="block px-4 py-3 text-sm text-center text-gray-700 truncate image-card-text rounded-b-xl md:py-2 sm-500:py-1 bg-gradient-to-r">{text}</p>
            </li>
        </Link>
    )
}

export default ImageCard
