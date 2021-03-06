import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RecipeContext } from '../../contexts/Recipe'

import ImageCardList from '../ImageCardList'
import SkeletonImageCardList from '../SkeletonImageCardList'
import Header from '../Header'
import Nav from '../Nav'

const RecipeSearchResult = (props) => {
    const q = new URLSearchParams(props.location.search).get('q')

    const params = useParams()
    const page = +params.page

    const { searchRecipes } = useContext(RecipeContext)

    const [recipes, setRecipes] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [totalPages, setTotalPages] = useState(null)

    const redirect = (link) => {
        props.history.push(link)
    }

    useEffect(() => {
        setRecipes([])
        searchRecipes(q, 6, (page - 1) * 6)
            .then(({ results, totalResults }) => {
                setRecipes(results)
                setTotalResults(totalResults)
                setTotalPages(Math.ceil(totalResults / 6))
            })
    }, [page, q, searchRecipes])

    return (recipes &&
        <>
            <Nav />
            <main className="container flex flex-col justify-center pb-8 mt-12 mb-auto align-center lg:px-32">
                <Header />

                {!recipes.length && (
                    <SkeletonImageCardList />
                )}

                <section id="search-result">
                    <p className="mt-4 text-center">{totalResults} recipes found.</p>
                    <ImageCardList list={recipes} />
                </section>

                {/* PAGINATION */}
                <div className="flex items-center justify-center px-4 py-3 bg-white border-t border-gray-200 sm:px-6">

                    <button className={"focus:outline-none relative inline-flex items-center px-2 py-2 rounded-l-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 " + (page === 1 && "invisible")}
                        onClick={() => redirect(`/recipes/search/${page - 1}?q=${q}`)}
                    >
                        <span className="sr-only">Previous</span>
                        <svg className={"h-5 w-5 " + (page === 1 && "invisible")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>

                    <p className="block mx-5 place-self-center">
                        Page {page} of {totalPages}
                    </p>

                    <button className={"focus:outline-none relative inline-flex items-center px-2 py-2 rounded-r-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 " + (page === totalPages && "invisible")}
                        onClick={() => redirect(`/recipes/search/${page + 1}?q=${q}`)}
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            className={"h-5 w-5 " + (page === totalPages && "invisible")}
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </main>
        </>
    )
}

export default RecipeSearchResult
