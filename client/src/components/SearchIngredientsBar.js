import React, { useContext, useState, useEffect } from 'react'
import { RecipeContext } from '../contexts/Recipe'

const SearchBar = (props) => {
    const { autocompleteIngredient } = useContext(RecipeContext)
    const { addIngredient } = props
    const [searchInput, setSearchInput] = useState('')
    const [searchInputFinal, setSearchInputFinal] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [cursor, setCursor] = useState(0)

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleKeyDown = (e) => {
        console.log(e.key)
        if (e.key === 'Enter') {
            if (cursor > 0) {
                setSearchInputFinal(suggestions[cursor])
            } else if (suggestions.length) {
                setSearchInputFinal(suggestions[0])
            }
        }

        if (e.keyCode === 38 && cursor > -1) {
            setCursor(cursor - 1)
        } else if (e.keyCode === 40 && cursor < suggestions.length - 1) {
            setCursor(cursor + 1)
        }
    }

    useEffect(() => {
        autocompleteIngredient(searchInput)
            .then(result => {
                result = result.map((obj) => {
                    return obj.name
                }).slice(0, 3)

                setSuggestions(result)
            })
            .catch(err => console.log(err))
    }, [searchInput, autocompleteIngredient]) // autocomplete based on current search input

    useEffect(() => {
        addIngredient(searchInputFinal)
        setSearchInput('')
        setCursor(0)
        setSuggestions([])
    }, [searchInputFinal, addIngredient]) // add ingredient when the search input is final

    return (
        <div
            className={"focus:outline relative shadow-md rounded-lg flex-grow " + (props.className || "")}
        >
            <span className="absolute inset-y-0 left-0 pl-2 top-1">
                <button
                    type="submit" className="p-1 focus:outline-none focus:shadow-outline"
                    onClick={e => {
                        e.key = 'Enter'
                        handleKeyDown(e)
                    }} // use the same behaviour as enter keydown
                >
                    <img src="add-icon.svg" alt="add" />
                </button>
            </span>
            <input
                className={"focus:outline-none py-2 pl-8 text-center text-sm border-solid w-full border-b"}
                type="search"
                placeholder="add an ingredient..."
                value={searchInput}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <ul className="relative right-0 mx-auto text-sm text-center text-gray-800 bg-white">
                {suggestions.map((suggestion, idx) => {
                    let className = (cursor === idx ? 'bg-gray-50 ' : '') + "block w-full px-1 pt-1 pl-4 cursor-pointer "

                    if (idx === suggestions.length - 1) {
                        className += "pb-2"
                    } else {
                        className += "pb-1"
                    }

                    return <li
                        key={idx}
                        className={className}
                        onMouseEnter={() => setCursor(idx)}
                        onClick={e => {
                            e.key = 'Enter'
                            handleKeyDown(e)
                        }} // use the same behaviour as enter keydown
                    >{suggestion}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchBar
