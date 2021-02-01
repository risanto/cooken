import React, { useContext, useEffect, useState } from 'react'
import _ from 'lodash'
import { RecipeContext } from '../../contexts/Recipe'
import ImageCardList from '../ImageCardList'
import Nav from '../Nav'

const RecipeSearchResult = ({ location }) => {
    const q = new URLSearchParams(location.search).get('q')

    const { searchRecipes } = useContext(RecipeContext)

    const [recipes, setRecipes] = useState([])
    const [totalResults, setTotalResults] = useState([])
    const [offset, setOffset] = useState([])

    useEffect(() => {
        searchRecipes(q)
            .then(({ results, totalResults, offset }) => {
                setRecipes(results)
                setTotalResults(totalResults)
                setOffset(offset)
            })
    }, [])

    return (
        <section id="search-result" className="mb-8">
            <Nav />
            <p className="mt-4 text-center">Returning {Math.ceil(totalResults / recipes.length)} page(s) of results.</p>
            <ImageCardList list={recipes} />
            {/* PAGINATE HERE */}
        </section>
    )
}

export default RecipeSearchResult
