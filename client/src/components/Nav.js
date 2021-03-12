import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/User'

const Nav = (props) => {
    const { isAuthenticated, removeAccessToken } = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        removeAccessToken()
        history.push('/')
        window.location.reload()
    }

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    const handleLink = e => {
        // when clicking the link on the same page
        if (window.location.href === (e.target.href || e.currentTarget.href)) {
            toggleOpen()
        }
    }

    if (isOpen) document.body.style.setProperty("overflow", "hidden")
    else document.body.style.removeProperty("overflow")

    return (
        <>
            <nav className="fixed sticky top-0 z-10 flex items-center h-12 gap-2 p-2 bg-white md:pl-4">
                <button
                    onClick={toggleOpen}
                >
                    <img
                        src="/hamburger-menu-red.png" className="w-10 h-8" alt="menu"
                    />
                </button>

                {props.showLogo && (
                    <Link to="/">
                        <img
                            src="/cooken-logo.png" alt="cooken-logo" className="w-16 h-8"
                        />
                    </Link>
                )}
            </nav>
            <aside
                className={"fixed top-0 left-0 z-30 w-64 h-full overflow-auto transition-all duration-300 ease-in-out transform bg-white flex flex-col align-center "
                    + (isOpen ? 'translate-x-0' : '-translate-x-full')
                }
            >
                <Link to="/" onClick={handleLink} className="inline-block mx-auto">
                    <img
                        src="/cooken-logo.png" alt="cooken-logo" className="w-20 py-6 mx-auto border-b border-gray-200 cursor-pointer"
                    />
                </Link>
                <Link to="/" onClick={handleLink}
                    className="inline-block mx-auto mt-6 text-center cursor-pointer hover:text-red-500"
                >Home</Link>
                {isAuthenticated && (
                    <>
                        <Link to='/myIngredients' onClick={handleLink}
                            className="inline-block mx-auto mt-4 text-center cursor-pointer hover:text-red-500"
                        >My ingredients
                        </Link>
                        <Link
                            to='/savedRecipes' onClick={handleLink}
                            className="inline-block mx-auto mt-4 text-center cursor-pointer hover:text-red-500"
                        >Saved recipes
                        </Link>
                        <div onClick={logout} className="inline-block mx-auto mt-4 text-center cursor-pointer hover:text-red-500">Log out</div>
                    </>
                )}
                {!isAuthenticated && (
                    <Link to='/joinLogin' onClick={handleLink}
                        className="inline-block mx-auto mt-4 text-center cursor-pointer hover:text-red-500"
                    >Join / log in</Link>
                )}
            </aside>
            {isOpen && (
                <div
                    onClick={toggleOpen}
                    className="fixed inset-0 z-10 bg-black opacity-20"
                    tabIndex="0"
                ></div>
            )}
        </>
    )
}

export default Nav
