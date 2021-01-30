import React from 'react'
import { Link } from 'react-router-dom'

const ImageCard = ({ imageSrc, text, linkTo }) => {
    return (
        <Link to={linkTo} className="inline-block w-1/3 m-2 transform rounded-t-lg shadow cursor-pointer hover:-translate-y-2 hover:shadow-xl md:m-4 rounded-b-xl md:w-1/4">
            <li className="">
                <img className={"rounded-t-lg w-full object-fit"} src={imageSrc ? imageSrc : 'chef-hat-icon-wide.png'} alt={text.split(' ').join('-')} />

                {/* VERSION 1 */}
                <p className="block px-3 py-1 text-xs font-bold text-center text-white truncate rounded-b-xl bg-gradient-to-r from-red-600 via-red-500 to-pink-500 md:py-2">{text}</p>

                {/* VERSION 2 */}
                {/* <p className="block px-3 py-1 text-xs font-bold text-center text-red-500 truncate image-card-text rounded-b-xl md:py-2">{text}</p> */}
            </li>
        </Link>
    )
}

export default ImageCard
