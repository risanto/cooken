import React, { useContext } from 'react'
import SearchBar from '../SearchBar'
import { RecipeContext } from '../../contexts/Recipe'
import ImageCardList from '../ImageCardList'
import SkeletonImageCardList from '../SkeletonImageCardList'

const Home = () => {
    const { randomRecipes, generateNewRandomRecipes } = useContext(RecipeContext)

    return (
        <div className="container flex flex-col justify-center pb-8 mb-8 align-center lg:px-32 lg:py-8">
            <section className="mt-8 md:hidden">
                <div className="flex justify-center align-center">
                    <img className="w-24 cursor-pointer" src="cooken-logo-2.png" alt="Cooken" />
                </div>
                <div className="flex justify-center px-2 mt-4 align-center">
                    <SearchBar className="flex-grow" />
                </div>
            </section>
            <section className="hidden mx-8 mt-4 md:block">
                <div className="flex justify-between align-center">
                    <img className="w-24" src="cooken-logo-2.png" alt="Cooken" />
                    <div className="flex justify-between py-4 align-center">
                        <SearchBar className="" />
                    </div>
                </div>
            </section>

            {!randomRecipes.length && (
                <SkeletonImageCardList />
            )}

            <section>
                <p className="mt-4 text-center text-gray-500">Some recipes to inspire you.</p>
                <ImageCardList list={randomRecipes} />
            </section>

            <section className="flex justify-center mt-4 align-center">
                <button className="flex justify-center px-1 text-sm text-gray-500 border-2 rounded-xl align-center hover:text-gray-600 hover:border-gray-400" onClick={generateNewRandomRecipes}>
                    <p className="p-1">
                        <img className="inline-block w-6" src="random-icon.png" alt="random-icon" />
                        Show me other random recipes
                    </p>
                </button>
            </section>

            <section className="flex flex-col justify-center mt-3 md:flex-row align-center">
                <p className="px-4 py-4 text-sm text-center">Do you want to make a dish based on what's available on your fridge?</p>

                <button className="self-center px-4 py-2 mt-2 text-sm text-red-500 border-2 border-red-300 rounded-xl md:mt-0 bg-gradient-to-r hover:from-pink-600 hover:via-red-500 hover:to-red-600 hover:text-white">
                    Join / sign in
                </button>
            </section>
        </div>
    )
}

export default Home