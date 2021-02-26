import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/User'
import Nav from '../Nav'
import SearchIngredientsBar from '../SearchIngredientsBar'
import { toastError } from '../../helpers'

const MyIngredients = () => {
    const { user, updateUserIngredients } = useContext(UserContext)
    const [ingredients, setIngredients] = useState([])

    const addIngredient = (newIngredient) => {
        if (!ingredients.includes(newIngredient)) {
            if (newIngredient.length) {
                if (ingredients.length) {
                    setIngredients([...ingredients, newIngredient])
                } else {
                    setIngredients([newIngredient])
                }
            }
        } else {
            toastError("You already have that in your ingredients.")
        }
    }

    const removeIngredient = (idx) => {
        let ingredientsCopy = [...ingredients]
        ingredientsCopy.splice(idx, 1)
        setIngredients(ingredientsCopy)
    }

    useEffect(() => {
        if (user.ingredientsStr?.length > 0) {
            setIngredients(user.ingredientsStr.join(','))
        }
    }, [])

    useEffect(() => {
        updateUserIngredients(ingredients)
            .catch(err => toastError(err))
    }, [ingredients])

    return (
        <>
            <Nav showLogo={true} />
            <div className="container">
                <section className="flex justify-center mx-2 align-center">
                    <SearchIngredientsBar
                        addIngredient={addIngredient}
                        className={"mt-10"}
                    />
                </section>
                <section className="flex flex-wrap mt-2">
                    {ingredients.map((ingredient, idx) => {
                        return <div
                            key={idx}
                            onClick={() => removeIngredient(idx)}
                            className="flex inline-block py-2 pl-4 pr-3 mt-3 ml-2 border shadow-lg rounded-xl"
                        >
                            <span>{ingredient}</span>
                            <img
                                src="delete-icon.svg"
                                alt="delete"
                                className="h-4 ml-1 place-self-center"
                            />
                        </div>
                    })}
                </section>
            </div>
        </>
    )
}

export default MyIngredients
