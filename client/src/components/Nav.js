import React from 'react'
import { useHistory } from 'react-router-dom'

const Nav = (props) => {
    let history = useHistory()

    const redirectTo = (link) => {
        // window.location.reload(false)
        history.push(link)
    }

    return (
        <nav className="fixed sticky top-0 z-50 flex gap-2 p-2 bg-white cursor-pointer md:pl-4">
            <img src="/hamburger-menu-red.png" className="w-10" alt="menu" />

            {props.showLogo && (
                <img
                onClick={() => redirectTo('/')}
                src="/cooken-logo.png" alt="cooken-logo" className="w-20 cursor-pointer"/>
            )}
        </nav>
    )
}

export default Nav
