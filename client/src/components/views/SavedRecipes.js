import React, { useContext } from 'react'
import { UserContext } from '../../contexts/User'
import Nav from '../Nav'
import ImageCardList from '../ImageCardList'

const SavedRecipes = () => {
    const { savedRecipes } = useContext(UserContext)

    return (
        <>
            <Nav showLogo={true} />
            <main className="container flex flex-col justify-center pb-16 align-center lg:px-32">
                {!!savedRecipes.length && (
                    <>
                        <p className="mt-4 text-center">Your saved recipes.</p>
                        <ImageCardList list={savedRecipes} savedRecipes={true} />
                    </>
                )}

                {!savedRecipes.length && (
                    <>
                        <p className="mt-4 mt-8 text-center">It looks like you haven't saved any recipes yet.</p>
                        <img
                        alt="empty-fridge" 
                        src='/empty-fridge.png' width="500" className="mt-8 place-self-center"/>
                    </>
                )}
            </main>
        </>
    )
}

export default SavedRecipes
