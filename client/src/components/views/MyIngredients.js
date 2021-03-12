import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/User'
import Nav from '../Nav'
import SearchIngredientsBar from '../SearchIngredientsBar'
import RecipesICanMake from '../RecipesICanMake'
import { toastError, groupRecipesBy } from '../../helpers'

const MyIngredients = (props) => {
    const { updateUserIngredients, authenticate, findByIngredients, getAccessToken } = useContext(UserContext)
    const [ingredients, setIngredients] = useState([])
    const [showRecipesICanMake, setShowRecipesICanMake] = useState(false)
    const [loadRecipesICanMake, setLoadRecipesICanMake] = useState(false)
    const [recipeGroups, setRecipeGroups] = useState([])
    
    if (!getAccessToken()) {
        props.history.push('/')
    }

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
            toastError("You already have that in your list of ingredients.")
        }
    }

    const removeIngredient = (idx) => {
        let ingredientsCopy = [...ingredients]
        ingredientsCopy.splice(idx, 1)
        setIngredients(ingredientsCopy)
    }

    const handleShowRecipes = () => {
        if (ingredients.length === 0) {
            toastError('Please add an ingredient first!')
        } else {
            setShowRecipesICanMake(true)
        }
    }

    useEffect(() => {
        authenticate()
            .then(data => {
                if (data.ingredientsStr?.length > 0) {
                    setIngredients(data.ingredientsStr.split(','))
                }
            })
            .catch(err => {
                toastError(err)
            })
    }, [authenticate])

    useEffect(() => {
        if (ingredients.length === 0) {
            setShowRecipesICanMake(false)
            setLoadRecipesICanMake(false)
        } else {
            updateUserIngredients(ingredients)
                .catch(err => {
                    toastError(err)
                })
        }
    }, [ingredients, updateUserIngredients])

    useEffect(() => {
        if (showRecipesICanMake) {
            setLoadRecipesICanMake(true)
            findByIngredients(ingredients)
                .then(data => {
                    const grouped = groupRecipesBy(data, 'usedIngredientCount', 'desc', ingredients.length)
                    setRecipeGroups(grouped)
                })
                .catch(err => {
                    props.history.push('/error/' + err.message)
                })
        }
    }, [ingredients, showRecipesICanMake, findByIngredients, props.history])

    return (
        <main
            style={{ backgroundImage: "url('/girl-open-fridge.png')" }}
            className="h-screen bg-bottom bg-no-repeat bg-contain bg-indigo-10 sm-500:bg-75% md:bg-30% md:bg-right mb-auto"
        >
            <Nav showLogo={true} />
            <div
                className="container sm-500:w-2/3 lg:w-1/3 sm-500:mx-auto"
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
                                className="flex inline-block py-2 pl-4 pr-3 mt-3 ml-2 bg-white border shadow-lg cursor-pointer rounded-xl"
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
                            onClick={handleShowRecipes}
                            className="self-center px-4 py-2 text-lg text-white bg-red-500 shadow rounded-xl focus:outline-none md:mt-0 bg-gradient-to-r hover:from-purple-600 hover:via-indigo-500 hover:to-indigo-600"
                        >
                            Show me what I can make
                            </button>
                    </section>
                </div>
            </div>
            {showRecipesICanMake && loadRecipesICanMake && (
                <RecipesICanMake
                    recipeGroups={recipeGroups} />
            )}
        </main>
    )
}

export default MyIngredients
