import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { UserContext } from '../contexts/User'

const Nav = (props) => {
    const { isAuthenticated } = useContext(UserContext)

    let history = useHistory()

    const redirectTo = (link) => {
        history.push(link)
    }

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    if (isOpen) document.body.style.setProperty("overflow", "hidden")
    else document.body.style.removeProperty("overflow")

    return (
        <>
            <nav className="fixed sticky top-0 z-10 flex gap-2 p-2 bg-white cursor-pointer md:pl-4">
                <img
                    onClick={toggleOpen}
                    src="/hamburger-menu-red.png" className="w-10" alt="menu"
                />

                {props.showLogo && (
                    <Link to="/">
                    <img
                        // onClick={() => redirectTo('/')}
                        src="/cooken-logo.png" alt="cooken-logo" className="w-20 cursor-pointer" />
                    </Link>
                )}
            </nav>
            <aside
                className={"fixed top-0 left-0 z-30 w-64 h-full overflow-auto transition-all duration-300 ease-in-out transform bg-white " + (isOpen ? 'translate-x-0' : '-translate-x-full')}
            >
                <img
                    onClick={() => redirectTo('/')}
                    src="/cooken-logo.png" alt="cooken-logo" className="w-20 py-4 mx-auto border-b cursor-pointer"
                />
                <ul>
                    <li
                        onClick={() => redirectTo('/')}
                        className="mt-4 text-center cursor-pointer hover:text-red-500"
                    >Home</li>
                    {isAuthenticated && (
                        <>
                            <li
                                onClick={() => redirectTo('/myIngredients')}
                                className="mt-4 text-center cursor-pointer hover:text-red-500"
                            >My ingredients
                            </li>
                            <li
                                onClick={() => redirectTo('/savedRecipes')}
                                className="mt-4 text-center cursor-pointer hover:text-red-500"
                            >Saved recipes
                            </li>
                            <li className="mt-4 text-center cursor-pointer hover:text-red-500">Log out</li>
                        </>
                    )}
                    {!isAuthenticated && (
                        <li
                            onClick={() => redirectTo('/joinLogin')}
                            className="mt-4 text-center cursor-pointer hover:text-red-500"
                        >Join / log in</li>
                    )}
                </ul>
            </aside>
            {isOpen && (
                <div
                    onClick={toggleOpen}
                    className="absolute inset-0 z-10 bg-black opacity-25 cursor-pointer"
                    tabIndex="0"
                ></div>
            )}
        </>
    )
}

export default Nav
