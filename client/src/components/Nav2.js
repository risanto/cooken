import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="fixed sticky top-0 z-50 flex gap-2 py-1 pl-1 bg-white cursor-pointer md:pl-4">
            <img src="../hamburger-menu-red.png" className="w-10" alt="menu" />
            <Link to="/" className="cursor-pointer">
                <img src="../cooken-logo.png" alt="cooken-logo" className="w-20"/>
            </Link>
        </nav>
    )
}

export default Nav
