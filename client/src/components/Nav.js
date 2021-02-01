import React from 'react'

const Nav = () => {
    return (
        <nav className="fixed sticky top-0 z-50 grid grid-cols-9 gap-2 py-1 bg-white cursor-pointer">
            <img src="../hamburger-menu-red.png" className="w-10 col-span-1" alt="menu"/>
            <img className="self-center w-24 col-span-2 cursor-pointer" src="../cooken-logo.png" alt="cooken-logo" />
        </nav>
    )
}

export default Nav
