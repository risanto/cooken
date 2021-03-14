import React, { useContext, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { UserContext } from '../contexts/User'
import { toastDefault, toastError } from '../helpers/toast'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const ImageCard = (props) => {

    const { imageSrc, text, linkTo, extraClasses, recipeId } = props
    const { isAuthenticated, saveRecipe, savedRecipes, fetchSavedRecipes, removeFromSavedRecipes } = useContext(UserContext)

    const handleSaveRecipe = e => {
        e.stopPropagation()
        e.preventDefault()
        saveRecipe(recipeId, imageSrc, text)
            .then(_ => fetchSavedRecipes())
            .then(_ => {
                toastDefault('Recipe saved.')
            })
            .catch(err => {
                toastError(err.messages[0])
            })
    }

    const handleRemoveRecipe = e => {
        e.stopPropagation()
        e.preventDefault()
        removeFromSavedRecipes(recipeId)
            .then(_ => fetchSavedRecipes())
            .then(_ => {
                toastDefault('Removed from saved recipes.')
            })
            .catch(err => {
                toastError(err.messages[0])
            })
    }

    const [isSaved, setIsSaved] = useState(false)

    const imgPlaceholder = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 556 370"%3E%3C/svg%3E`;

    useEffect(() => {
        if (savedRecipes.find(el => el.recipeId === recipeId)) {
            setIsSaved(true)
        } else setIsSaved(false)
    }, [savedRecipes, recipeId])

    return (
        <Link to={linkTo}
            className={"inline-block w-3/4 m-2 transform rounded-t-lg shadow cursor-pointer no-flicker hover:-translate-y-2 hover:shadow-xl md:m-4 rounded-b-xl sm-500:w-2/5 md:w-1/4 image-card " + extraClasses}
        >
            <>
                {/* Without lazy loading */}
                {/* <img className={"rounded-t-lg w-full"} src={imageSrc ? imageSrc : 'chef-hat-icon-wide.png'} alt={text.split(' ').join('-')}" /> */}

                <LazyLoadImage
                    alt={text.split(' ').join('-')}
                    src={imageSrc ? imageSrc : '/chef-hat-icon-wide.png'}
                    placeholderSrc={imgPlaceholder}
                    className={"rounded-t-lg w-full h-full"}
                    effect="blur"
                    width="556"
                    height="370"
                />

                {/* Save recipe */}
                {isAuthenticated && !isSaved && (
                    <img
                        alt="save recipe"
                        onClick={handleSaveRecipe}
                        className="absolute top-0 right-0 transform no-flicker hover:-translate-y-1"
                        src="save-icon.svg"
                    />
                )}

                {/* Remove recipe */}
                {isAuthenticated && isSaved && (
                    <img
                        alt="remove recipe"
                        onClick={handleRemoveRecipe}
                        className="absolute top-0 right-0 transform no-flicker hover:-translate-y-1"
                        src="saved-icon.svg"
                    />
                )}

                {/* VERSION 1 */}
                {/* <p className="block px-4 py-2 text-sm text-center text-white truncate rounded-b-xl bg-gradient-to-r from-red-600 via-red-500 to-pink-500 sm-500:py-1">{text}</p> */}

                {/* VERSION 2 */}
                <p className="block px-4 py-3 -mt-2 text-sm text-center text-gray-700 truncate image-card-text rounded-b-xl md:py-2 sm-500:py-2 bg-gradient-to-r">{text}</p>
            </>
        </Link>
    )
}

export default withRouter(ImageCard)
