import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="fixed sticky top-0 z-50 grid grid-cols-9 gap-2 py-1 pl-1 bg-white cursor-pointer md:pl-4">
            <img src="../hamburger-menu-red.png" className="w-10 col-span-1" alt="menu" />
            <Link to="/" className="self-center col-span-2 cursor-pointer w-18">
                <img src="../cooken-logo.png" alt="cooken-logo" />
            </Link>
        </nav>
    )
}

export default Nav
