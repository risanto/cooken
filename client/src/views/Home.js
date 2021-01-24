import React, { useContext } from 'react'
import SearchBar from '../components/SearchBar'
import { RecipeContext } from '../contexts/Recipe'

const Home = () => {
    const { randomRecipes, generateNewRandomRecipes } = useContext(RecipeContext)

    // randomRecipes.forEach(recipe => {
    //     console.log(recipe.title, recipe.image)
    // })

    const randomRecipesCards = randomRecipes.map(recipe => {
        return (
            <div className="">
                <img className="rounded-t-lg" src={recipe.image} />
                <p className="bg-red-500 text-xs text-white text-center p-2 font-bold rounded-b-xl">{
                    recipe.title.length < 19
                        ? recipe.title.length 
                        : recipe.title.substring(0, 19) + '..' 
                }</p>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="flex justify-center align-center pt-8">
                <img className="w-24" src="cooken-logo-2.png" alt="cooken-logo" />
            </div>
            <div className="flex justify-center align-center pt-8">
                <SearchBar />
            </div>
            <div className="grid grid-cols-2 pt-8 gap-5">
                {randomRecipesCards}
            </div>
            <div className="flex justify-center align-center pt-4">
                <button>Show me other random recipes</button>
            </div>
        </div>
    )
}

export default Home