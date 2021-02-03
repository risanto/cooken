import React, { useState } from 'react'
import { withRouter } from 'react-router'

const SearchBar = ({ className, history }) => {
    const [searchInput, setSearchInput] = useState('')

    const redirect = (link) => {
        history.push(link)
    }

    return (
        <div id="search-bar" className={"relative w-3/4 md:w-full " + (className || "")}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </span>
            <input
                className={"py-2 pl-8 text-center text-sm italic border-solid border border-gray-500 rounded-lg w-full"}
                type="search"
                placeholder="find something to cook..."
                onChange={e => setSearchInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? redirect(`/recipes/search?q=${searchInput}`) : ''}
            />
        </div>
    )
}

export default withRouter(SearchBar)
