import React, { useContext, useEffect, useState } from 'react'
import { RecipeContext } from '../../contexts/Recipe'

import ImageCardList from '../ImageCardList'
import SearchBar from '../SearchBar'

const RecipeSearchResult = ({ location }) => {
    const q = new URLSearchParams(location.search).get('q')

    const { searchRecipes } = useContext(RecipeContext)

    const [recipes, setRecipes] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)

    useEffect(() => {
        searchRecipes(q, 9, (page - 1) * 9)
            .then(({ results, totalResults }) => {
                setRecipes(results)
                setTotalResults(totalResults)
                setTotalPages(Math.ceil(totalResults / results.length))
            })
    }, [page, q])

    return (
        <div className="container flex flex-col justify-center pb-16 align-center lg:px-32 lg:pt-8">
            <header className="flex flex-col mt-8 md:hidden">
                <img className="self-center w-24 cursor-pointer" src="../cooken-logo-2.png" alt="Cooken" />
                <SearchBar className="self-center mt-4" />
            </header>
            <header className="hidden mx-8 mt-4 md:block">
                <div className="flex justify-between align-center">
                    <img className="w-24" src="../cooken-logo-2.png" alt="Cooken" />
                    <div className="flex justify-between py-4 align-center">
                        <SearchBar />
                    </div>
                </div>
            </header>

            <section id="search-result">
                <p className="mt-4 font-serif text-2xl font-bold text-center">{totalResults} recipes found.</p>
                <ImageCardList list={recipes} />
            </section>

            {/* PAGINATION */}
            <div className="flex items-center justify-center px-4 py-3 bg-white border-t border-gray-200 sm:px-6">

                <a href="#" className={"relative inline-flex items-center px-2 py-2 rounded-l-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 " + (page === 1 && "invisible")}
                onClick={() => setPage(page - 1)}
                >
                    <span className="sr-only">Previous</span>
                    <svg className={"h-5 w-5 " + (page === 1 && "invisible")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </a>

                <p class="block place-self-center mx-5">
                    Page {page} of {totalPages}
                </p>

                <a href="#" 
                className={"relative inline-flex items-center px-2 py-2 rounded-r-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 " + (JSON.stringify(page) === JSON.stringify(totalPages) && "invisible")}
                onClick={() => setPage(page + 1)}
                >
                    <span className="sr-only">Next</span>
                    <svg
                    className={"h-5 w-5 " + (JSON.stringify(page) === JSON.stringify(totalPages) && "invisible")}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default RecipeSearchResult
