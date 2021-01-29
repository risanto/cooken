import React from 'react'
import Skeleton from "react-loading-skeleton"

const SkeletonImageCardList = () => {
    return (
        <section>
        <div className="flex align-center justify-center">
            <div className="w-1/3 mt-4">
                <Skeleton/>
            </div>
        </div>

        <ul className="flex flex-wrap justify-center list-none">
          {Array(6)
            .fill()
            .map((item, index) => (
                <div className="shadow transform hover:-translate-y-2 cursor-pointer hover:shadow-xl m-2 md:m-4 w-1/3 md:w-1/4 rounded-t-lg rounded-b-xl">

                <div className="md:hidden">
                    <Skeleton height={100} />
                </div>
                <div className="hidden md:block">
                    <Skeleton height={150} />
                </div>
    
                <p className="block rounded-b-xl text-xs text-white text-center py-1 md:py-2 px-3 font-bold truncate"><Skeleton/></p>
            </div>
            ))}
        </ul>
      </section>
    )
}

export default SkeletonImageCardList
