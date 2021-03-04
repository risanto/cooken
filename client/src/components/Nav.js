import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/User'

const Nav = (props) => {
    const { isAuthenticated, removeAccessToken } = useContext(UserContext)

    const logout = () => {
        removeAccessToken()
        window.location.reload()
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
                            src="/cooken-logo.png" alt="cooken-logo" className="w-20 cursor-pointer" />
                    </Link>
                )}
            </nav>
            <aside
                className={"fixed top-0 left-0 z-30 w-64 h-full overflow-auto transition-all duration-300 ease-in-out transform bg-white flex flex-col align-center " 
                + (isOpen ? 'translate-x-0' : '-translate-x-full')
            }
            >
                <Link to="/" className="inline-block mx-auto">
                    <img
                        src="/cooken-logo.png" alt="cooken-logo" className="w-20 py-6 mx-auto border-b border-gray-200 cursor-pointer"
                    />
                </Link>
                <Link to="/"
                    className="inline-block mx-auto mt-6 text-center cursor-pointer hover:text-red-500"
                >Home</Link>
                {isAuthenticated && (
                    <>
                        <Link to='/myIngredients'
                            className="inline-block mx-auto mt-4 text-center cursor-pointer hover:text-red-500"
                        >My ingredients
                            </Link>
                        <Link
                            to='/savedRecipes'
                            className="inline-block mx-auto mt-4 text-center cursor-pointer hover:text-red-500"
                        >Saved recipes
                            </Link>
                        <div onClick={logout} className="inline-block mx-auto mt-4 text-center cursor-pointer hover:text-red-500">Log out</div>
                    </>
                )}
                {!isAuthenticated && (
                    <Link to='/joinLogin'
                        className="inline-block mx-auto mt-4 text-center cursor-pointer hover:text-red-500"
                    >Join / log in</Link>
                )}
            </aside>
            {isOpen && (
                <div
                    onClick={toggleOpen}
                    className="absolute inset-0 z-10 h-screen bg-black opacity-20"
                    tabIndex="0"
                ></div>
            )}
        </>
    )
}

export default Nav
