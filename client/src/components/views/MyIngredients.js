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
            setIngredients(user.ingredientsStr.split(','))
        }
    }, [])

    useEffect(() => {
        updateUserIngredients(ingredients)
            .catch(err => toastError(err))
    }, [ingredients])

    return (
        <div
        style={{ backgroundImage: "url('/girl-open-fridge.png')" }}
        className="h-screen bg-bottom bg-no-repeat bg-contain bg-indigo-10"
        >
            <Nav showLogo={true} />
            <div
                className="container"
            >
                <div className="flex flex-col justify-center pt-4 align-center">
                    <section className="mx-3">
                        <h1
                            className="text-lg font-bold"
                        >Cook with what you have</h1>
                        <p className="my-4">Enter the ingredients you have on hand, and we'll show you recipes you could make.</p>
                    </section>
                    <SearchIngredientsBar
                        addIngredient={addIngredient}
                        className={"mx-2"}
                    />
                    <section className="flex flex-wrap mt-2">
                        {ingredients.map((ingredient, idx) => {
                            return <div
                                key={idx}
                                onClick={() => removeIngredient(idx)}
                                className="flex inline-block py-2 pl-4 pr-3 mt-3 ml-2 bg-white border shadow-lg rounded-xl"
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
                    <section className="flex justify-center mt-8 align-center">
                        <button
                            className="self-center px-4 py-2 text-lg text-white bg-red-500 shadow rounded-xl focus:outline-none md:mt-0 bg-gradient-to-r hover:from-purple-600 hover:via-indigo-500 hover:to-indigo-600"
                        >
                            Show me what I can make
                            </button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default MyIngredients
