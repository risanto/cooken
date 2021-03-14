import React, { useContext, useEffect, useState, useCallback } from 'react'
import { RecipeContext } from '../../contexts/Recipe'
import { UserContext } from '../../contexts/User'

import Header from '../Header'
import Nav from '../Nav'
import ImageCardList from '../ImageCardList'
import SkeletonImageCardList from '../SkeletonImageCardList'

const Home = (props) => {
    const { getRandomRecipes, getDailyRandomRecipes } = useContext(RecipeContext)
    const { isAuthenticated, user } = useContext(UserContext)

    const [randomRecipes, setRandomRecipes] = useState([])

    const redirectTo = useCallback((link) => {
        props.history.push(link)
    }, [props])

    const generateNewRandomRecipes = useCallback(() => {
        setRandomRecipes([])
        getRandomRecipes()
            .then(randomRecipes => {
                setRandomRecipes(randomRecipes)
                window.scrollTo(0, 0)
            })
            .catch(err => {
                redirectTo(`/error/${err.message}`)
            })
    }, [setRandomRecipes, getRandomRecipes, redirectTo])

    useEffect(() => {
        getDailyRandomRecipes()
            .then(randomRecipes => {
                setRandomRecipes(randomRecipes)
            })
            .catch(err => {
                redirectTo(`/error/${err.message}`)
            })
    }, [getDailyRandomRecipes, redirectTo])

    return (
        <>
            <Nav />
            <main
                className="container flex flex-col justify-center pb-16 mt-12 mb-auto align-center lg:px-32"
            >
                <Header />

                {/* Random recipes */}

                <section id="random-recipes">
                    {!!isAuthenticated && (
                        <>
                            <p className="w-64 mx-auto mt-4 text-center sm-500:w-5/6">Hello, <span className="font-bold text-red-500">{user.displayName}</span>! Here are some recipes to inspire you.</p>
                        </>
                    )}
                    {!isAuthenticated && (
                        <>
                            <p className="mt-4 text-center">Some recipes to inspire you.</p>
                        </>
                    )}
                    <ImageCardList list={randomRecipes} />
                </section>

                {!randomRecipes.length && (
                    <SkeletonImageCardList />
                )}


                <section className="flex justify-center mt-4 align-center">
                    <button className="flex justify-center px-1 text-sm text-gray-500 border-2 focus:outline-none rounded-xl align-center hover:text-indigo-900 hover:border-indigo-200" onClick={generateNewRandomRecipes}>
                        <p className="p-1">
                            <img className="inline-block w-6" src="random-icon.png" alt="random-icon" />
                        Show me other random recipes
                    </p>
                    </button>
                </section>

                <section className="flex flex-col self-center justify-center w-3/4 mt-3 md:w-full md:flex-row align-center">
                    <p className="px-4 py-4 text-base text-center">Do you want to make a dish based on what you have?</p>

                    {isAuthenticated && (
                        <button
                            onClick={() => redirectTo('/myIngredients')}
                            className="self-center px-4 py-2 text-sm text-red-500 border-2 border-red-300 focus:outline-none rounded-xl md:mt-0 bg-gradient-to-r hover:from-pink-600 hover:via-red-500 hover:to-red-600 hover:text-white"
                        >
                            Access my ingredients
                        </button>
                    )}

                    {!isAuthenticated && (
                        <button
                            onClick={() => redirectTo('/joinLogin')}
                            className="self-center px-4 py-2 text-sm text-red-500 border-2 border-red-300 focus:outline-none rounded-xl md:mt-0 bg-gradient-to-r hover:from-pink-600 hover:via-red-500 hover:to-red-600 hover:text-white"
                        >
                            Join / log in
                        </button>
                    )}
                </section>
            </main>
        </>
    )
}

export default Home