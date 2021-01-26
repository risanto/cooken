import React, { useContext } from 'react'
import SearchBar from '../SearchBar'
import { RecipeContext } from '../../contexts/Recipe'
import ImageCard from '../ImageCard'

const Home = () => {
    const { randomRecipes, generateNewRandomRecipes } = useContext(RecipeContext)

    const randomRecipesCards = randomRecipes.map(recipe => <ImageCard key={recipe.image} imageSrc={recipe.image} text={recipe.title} />)

    return (
        <div className="container flex flex-col justify-center align-center lg:px-32 lg:py-8 pb-8 mb-8">
            <section className="md:hidden mt-8">
                <div className="flex justify-center align-center">
                    <img className="w-24 cursor-pointer" src="cooken-logo-2.png" alt="Cooken" />
                </div>
                <div className="flex justify-center align-center px-2 mt-4">
                    <SearchBar className="flex-grow" />
                </div>
            </section>
            <section className="hidden md:block mx-8 mt-4">
                <div className="flex justify-between align-center">
                    <img className="w-24" src="cooken-logo-2.png" alt="Cooken" />
                    <div className="flex justify-between align-center py-4">
                        <SearchBar className="" />
                    </div>
                </div>
            </section>

            <p className="text-center text-gray-500 mt-4">Some recipes to inspire you.</p>

            <section className="flex flex-wrap self-center mt-2 align-center justify-center sm-500:w-2/3">
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
                <p className="text-center text-sm py-4 px-4">Do you want to make a dish based on what's available on your fridge?</p>

                <button className="border-2 rounded-xl py-2 px-4 mt-2 md:mt-0 text-sm border-red-300 text-red-500 self-center hover:bg-red-500 hover:text-white">
                    Join / sign in
                </button>
            </section>
        </div>
    )
}

export default Home