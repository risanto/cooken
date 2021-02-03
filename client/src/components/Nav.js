import React from 'react'
import SearchBar from './SearchBar'

const Nav = () => {
    return (
        <>
          <header className="flex flex-col mt-8 md:hidden">
                <img className="self-center w-24 cursor-pointer" src="cooken-logo-2.png" alt="Cooken" />
                <SearchBar className="self-center mt-4" />
            </header>
            <header className="hidden mx-8 mt-4 md:block">
                <div className="flex justify-between align-center">
                    <img className="w-24" src="cooken-logo-2.png" alt="Cooken" />
                    <div className="flex justify-between py-4 align-center">
                        <SearchBar />
                    </div>
                </div>
            </header>  
        </>
    )
}

export default Nav
