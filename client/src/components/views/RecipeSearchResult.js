import React from 'react'

const RecipeSearchResult = ({ location }) => {
    const q = new URLSearchParams(location.search).get('q')

    return (
        <div>
            {JSON.stringify(q, null, 2)}        
        </div>
    )
}

export default RecipeSearchResult
