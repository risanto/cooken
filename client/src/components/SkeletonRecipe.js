import React from 'react'
import Skeleton from "react-loading-skeleton"

const SkeletonRecipe = () => {
    return (
        <>
            <div className="flex flex-col bg-fixed bg-top bg-no-repeat h-80">
                <div className="w-full md:w-2/3 place-self-center">
                    <Skeleton height={300} />
                </div>
            </div>

            <h1 className="relative px-6 pt-1 pb-8 text-xl text-center text-white text-opacity-0 bottom-4 rounded-tl-xl bg-gradient-to-r from-red-600 via-red-500 to-pink-500">  Placeholder </h1>

            <div className="flex flex-col">
                <div className="w-1/3 place-self-center">
                    <Skeleton />
                </div>
                <div className="w-2/3 mt-5 place-self-center">
                    <div className="col-span-1 m-5">
                        {Array(15).fill().map((item, index) => {
                            return <Skeleton height={25} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkeletonRecipe
