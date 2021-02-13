import React, { useState } from 'react'
import Nav2 from '../Nav2'

const JoinLogin = () => {

    const [loginActive, setLoginActive] = useState(true)

    const toggleLoginActive = (boolean) => {
        setLoginActive(boolean)
    }

    const activeH2Classnames = "cursor-pointer flex-1 inline-block py-1 text-base text-center text-red-500 border-b-2 border-red-500 bg-pink-50"

    const inactiveH2Classnames = "cursor-pointer flex-1 inline-block py-1 text-base text-center text-gray-500 border-b-2 bg-gray-50"

    return (
        <div
        style={{ backgroundImage: "url('/chef-celebration.png')"}} 
        className="h-screen bg-no-repeat bg-contain below-sm-500:bg-none bg-30% sm-500:bg-chef-celebration sm-500:bg-right sm-500:bg-indigo-10 relative"
        >
            <Nav2 />
            
            <section className="relative flex flex-col w-full pb-10 bg-white sm-500:mt-5 sm-500:rounded-lg sm-500:shadow-md sm-500:w-2/3 md:w-1/3 sm-500:mx-auto sm-500:top-32">
                <div className="flex justify-around">
                    {/* Ingredients / Directions */}
                    <h2
                        className={
                            (loginActive ? activeH2Classnames : inactiveH2Classnames) + ' sm-500:rounded-tl-lg'
                        }
                        onClick={() => toggleLoginActive(true)}
                    >Log in</h2>
                    <h2
                        className={
                            (loginActive ? inactiveH2Classnames : activeH2Classnames) + ' sm-500:rounded-tr-lg'
                        }
                        onClick={() => toggleLoginActive(false)}
                    >Join</h2>
                </div>

                <div className="flex flex-col px-10 pt-10">
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                    </div>

                    <button className="px-6 py-2 mt-5 text-lg text-white bg-red-600 border-0 focus:outline-none bg-gradient-to-r from-pink-600 hover:from-pink-500 via-red-500 hover:via-red-400 to-red-600 hover:to-red-500 rounded-xl">Continue</button>
                </div>
            </section>

        </div>
    )
}

export default JoinLogin
