import React from 'react'
import Nav from '../Nav'

const About = () => {
    return (
        <>
            <Nav showLogo={true} />
            <main
                className="container flex flex-col justify-center pb-8 mt-12 mb-auto align-center lg:px-32"
            >
                <img alt="chef celebration" src="/chef-celebration.png" className="sm-500:h-96 place-self-center" />
                <div className="mt-4 w-80 sm-500:w-2/3 lg:w-2/5 place-self-center">
                    <p className="mb-2">
                        Cooken is a place where you can find recipes from all over the internet.
                    </p>
                    <p className="mb-2">
                        <span className="text-red-500">•</span> Don't know what to cook? We'll recommend you some random recipes.
                    </p>
                    <p className="mb-2">
                        <span className="text-red-500">•</span> Fancy a recipe and want to read it for later? Just save it!
                    </p>
                    <p className="mb-2">
                        <span className="text-red-500">•</span> Want to cook something but have limited ingredients? You can always search based on what you have.
                    </p>
                    <p className="mt-6 text-lg font-bold text-center text-red-500">
                        So, let's get started and let's cook 'em with Cooken.
                    </p>

                    <div className="mt-10 text-sm text-right">
                        <p>Images used on this site are attributed to:</p>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href='https://pngtree.com/so/victory'>- <u>https://pngtree.com/so/victory</u></a></li>
                            <li><a target="_blank"  rel="noreferrer" href='https://pngtree.com/so/fridge-clipart'>- <u>https://pngtree.com/so/fridge-clipart</u></a></li>
                            <li><a target="_blank"  rel="noreferrer" href='https://pngtree.com/so/hunger'>- <u>https://pngtree.com/so/hunger</u></a></li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About
