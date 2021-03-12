import React from 'react'
import Nav from '../Nav'
import { useParams } from 'react-router-dom'

const Error = () => {
    const { message } = useParams()
    
    return (
        <>
            <Nav showLogo={true}/>
            <main
                className="container flex flex-col justify-center pb-16 align-center lg:px-32"
            >
                <img alt="hungry-man" src="/hungry.png" className="sm-500:h-80 place-self-center"/>
                <p className="mt-4 w-80 sm-500:w-3/4 lg:w-2/3 place-self-center">{message}</p>
            </main>
        </>
    )
}

export default Error
