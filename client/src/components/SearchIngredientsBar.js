import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { RecipeContext } from '../contexts/Recipe'

const SearchBar = (props) => {
    const { autocompleteIngredient } = useContext(RecipeContext)
    const [searchInput, setSearchInput] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [cursor, setCursor] = useState(1)

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            cursor > 0 && setSearchInput(suggestions[cursor])
            // setSuggestions
        }

        if (e.keyCode === 38 && cursor > -1) {
            setCursor(cursor - 1)
        } else if (e.keyCode === 40 && cursor < suggestions.length - 1) {
            setCursor(cursor + 1)
        }

        console.log(cursor)
    }

    useEffect(() => {
        if (searchInput.length >= 2) {
            autocompleteIngredient(searchInput)
                .then(result => {
                    result = result.map((obj) => {
                        return obj.name
                    }).slice(0, 3)

                    setSuggestions(result)
                })
                .catch(err => console.log(err))
        } else {
            setSuggestions([])
        }
    }, [searchInput])

    let history = useHistory()

    const redirect = (link) => {
        history.push(link)
    }

    return (
        <div id="search-bar" className={"focus:outline relative w-3/4 md:w-full shadow-md rounded-lg border " + (props.className || "")}>
            <span className="absolute inset-y-0 left-0 pl-2 top-1">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <img src="add-icon.svg" alt="add" />
                </button>
            </span>
            <input
                className={"focus:outline-none py-2 pl-8 text-center text-sm border-solid w-full border-b"}
                type="search"
                placeholder="Enter your ingredients"
                value={searchInput}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <ul className="relative right-0 mx-auto text-sm text-center text-gray-800">
                {suggestions.map((suggestion, idx) => {
                    let className = (cursor === idx ? 'bg-gray-50 ' : null) + "block w-full px-1 pt-1 pl-4 "

                    if (idx === suggestions.length - 1) {
                        className += "pb-2"
                    } else {
                        className += "pb-1"
                    }

                    return <li key={idx} className={className}>{suggestion}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchBar
