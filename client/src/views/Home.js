import React, { useContext } from 'react'
import SearchBar from '../components/SearchBar'
import { RecipeContext } from '../contexts/Recipe'
import ImageCard from '../components/ImageCard'

const Home = () => {
    const { randomRecipes, generateNewRandomRecipes } = useContext(RecipeContext)

    const randomRecipesCards = randomRecipes.map(recipe => <ImageCard imageSrc={recipe.image} text={recipe.title} />)

    return (
        <div className="container lg:px-32 lg:py-8 pb-8 mb-8">
            <section className="md:hidden">
                <div className="flex justify-center align-center mt-8">
                    <img className="w-24" src="cooken-logo-2.png" alt="Cooken" />
                </div>
                <div className="flex justify-center align-center mt-4 px-2">
                    <SearchBar className="flex-grow" />
                </div>
            </section>
            <section className="hidden md:block">
                <div className="flex justify-between align-center mt-8">
                    <img className="w-24" src="cooken-logo-2.png" alt="Cooken" />
                    <div className="flex justify-between align-center py-4">
                        <SearchBar className="" />
                    </div>
                </div>
            </section>

            <p className="text-center text-gray-500 mt-4">Some recipes to inspire you.</p>

            <section className="flex flex-wrap mt-2 align-center justify-center">
                {randomRecipesCards}
            </section>

            <section className="flex justify-center align-center mt-4">
                <button className="flex align-center justify-center border-2 rounded-xl px-1 text-sm text-gray-500 hover:text-gray-600 hover:border-gray-400" onClick={generateNewRandomRecipes}>
                    <p className="p-1">
                        <img className="inline-block w-6" src="random-icon.png" />
                        Show me other random recipes
                    </p>
                </button>
            </section>

            <section className="flex flex-col md:flex-row justify-center align-center mt-3">
                <p className="text-center text-sm py-4">Do you want to make a dish based on what's available on your fridge?</p>

                <button className="border-2 rounded-xl py-2 px-4 mt-2 md:mt-0 md:ml-4 text-sm border-red-300 text-red-500 self-center hover:bg-red-500 hover:text-white">
                    Join / sign in
                </button>
            </section>
        </div>
    )
}

export default Home