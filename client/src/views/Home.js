import React, { useContext } from 'react'
import SearchBar from '../components/SearchBar'
import { RecipeContext } from '../contexts/Recipe'
import ImageCard from '../components/ImageCard'

const Home = () => {
    const { randomRecipes, generateNewRandomRecipes } = useContext(RecipeContext)

    const randomRecipesCards = randomRecipes.map(recipe => <ImageCard imageSrc={recipe.image} text={recipe.title.length < 19
        ? recipe.title.length
        : recipe.title.substring(0, 19) + '..'} />)

    return (
        <div className="container">
            <section className="flex justify-center align-center mt-8">
                <img className="w-24" src="cooken-logo-2.png" alt="cooken-logo" />
            </section>
            <section className="flex justify-center align-center mt-4">
                <SearchBar />
            </section>
            <section className="grid grid-cols-2 mt-4 gap-5">
                {randomRecipesCards}
            </section>
            <section className="flex justify-center align-center mt-4">
                <button className="border-2 rounded-xl py-2 px-4 text-sm" onClick={generateNewRandomRecipes}>
                    Show me other random recipes
                </button>
            </section>
            <p className="text-center pt-4">Do you want to make a dish based on what's available on your fridge?</p>
            <section className="flex justify-center align-center mt-2">
                <button className="border-2 rounded-xl py-2 px-4 text-sm flex-grow-0 border-red-300 text-red-500">
                    Join / sign in
                </button>
            </section>
        </div>
    )
}

export default Home