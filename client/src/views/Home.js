import React, { useContext } from 'react'
import SearchBar from '../components/SearchBar'
import { RecipeContext } from '../contexts/Recipe'

const Home = () => {
    const { randomRecipes, generateNewRandomRecipes } = useContext(RecipeContext)

    return (
        <div className="container">
            <div className="flex justify-center align-center pt-8">
                <img className="w-24" src="cooken-logo-2.png" />
            </div>
            <div className="flex justify-center align-center pt-8">
                <SearchBar/>
            </div>
        </div>
    )
}

export default Home