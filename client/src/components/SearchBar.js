import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState('')

    let history = useHistory()

    const redirect = (link) => {
        history.push(link)
    }

    return (
        <div id="search-bar" className={"relative w-3/4 md:w-full " + (props.className || "")}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </span>
            <input
                className={"focus:outline-none py-2 pl-8 text-center text-sm italic border-solid border border-gray-500 rounded-lg w-full"}
                type="search"
                placeholder="find something to cook..."
                onChange={e => setSearchInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && redirect(`/recipes/search/1?q=${searchInput}`)}
            />
        </div>
    )
}

export default SearchBar
