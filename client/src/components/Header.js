import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <>
            <header className="flex flex-col md:hidden">
                <Link to="/" className="cursor-pointer place-self-center">
                    <img className="self-center w-24 cursor-pointer" src="/cooken-logo-2.png" alt="Cooken" />
                </Link>
                <SearchBar className="self-center mt-4" />
            </header>
            <header className="hidden mx-8 mt-4 md:block">
                <div className="flex justify-between align-center">
                    <Link to="/" className="cursor-pointer place-self-center">
                        <img className="w-24" src="/cooken-logo-2.png" alt="Cooken" />
                    </Link>
                    <div className="flex justify-between py-4 align-center">
                        <SearchBar />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
