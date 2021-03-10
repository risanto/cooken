import React, { useContext } from 'react'
import { UserContext } from '../../contexts/User'
import Nav from '../Nav'
import ImageCardList from '../ImageCardList'

const SavedRecipes = () => {
    const { savedRecipes } = useContext(UserContext)

    return (
        <>
            <Nav showLogo={true} />
            <section className="container flex flex-col justify-center pb-16 align-center lg:px-32">
                {!!savedRecipes.length && (
                    <>
                        <p className="mt-4 font-bold text-center">Your saved recipes.</p>
                        <ImageCardList list={savedRecipes} savedRecipes={true} />
                    </>
                )}

                {!savedRecipes.length && (
                    <>
                        <p className="mt-4 font-bold text-center">It looks like you haven't saved anything yet.</p>
                    </>
                )}
            </section>
        </>
    )
}

export default SavedRecipes
