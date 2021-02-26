import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/User'
import Nav from '../Nav'
import SearchIngredientsBar from '../SearchIngredientsBar'

const MyIngredients = () => {
    const { user } = useContext(UserContext)
    const [ingredients, setIngredients] = useState(user.ingredientsStr?.split(','))

    return (
        <div>
            <Nav showLogo={true}/>
            {JSON.stringify(ingredients)}
            <div className="flex justify-center align-center">
                <SearchIngredientsBar className={"mt-10"}/>
            </div>
        </div>
    )
}

export default MyIngredients
