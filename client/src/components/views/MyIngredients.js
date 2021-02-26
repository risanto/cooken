import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/User'
import Nav from '../Nav'
import SearchIngredientsBar from '../SearchIngredientsBar'
import { toastDefault, toastError, capitalizeFirstLetter } from '../../helpers'

const MyIngredients = () => {
    const { user } = useContext(UserContext)
    const [ingredients, setIngredients] = useState([])

    const addIngredient = (newIngredient) => {
        if (!ingredients.includes(newIngredient)) {
            if (newIngredient.length) {
                if (ingredients.length) {
                    setIngredients([...ingredients, newIngredient])
                } else {
                    setIngredients([newIngredient])
                }

                toastDefault(capitalizeFirstLetter(newIngredient) + ' added to your ingredients.')
            }
        } else {
            toastError("You already have that in your ingredients.")
        }
    }

    useEffect(() => {
        if (user.ingredientsStr?.length > 0) {
            setIngredients(user.ingredientsStr.join(','))
        }
    }, [])

    return (
        <div>
            <Nav showLogo={true} />
            {JSON.stringify(ingredients)}
            <div className="flex justify-center align-center">
                <SearchIngredientsBar
                    addIngredient={addIngredient}
                    className={"mt-10"}
                />
            </div>
        </div>
    )
}

export default MyIngredients
