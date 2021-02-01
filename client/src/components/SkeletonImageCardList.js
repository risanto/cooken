import React from 'react'
import Skeleton from "react-loading-skeleton"

const SkeletonImageCardList = () => {
    return (
        <section>
        <div className="flex justify-center align-center">
            <div className="w-1/3 mt-4">
                <Skeleton/>
            </div>
        </div>

        <ul className="flex flex-wrap justify-center list-none">
          {Array(6)
            .fill()
            .map((item, index) => (
                <div key={index} className="inline-block w-3/4 m-2 transform rounded-t-lg shadow cursor-pointer no-flicker hover:-translate-y-2 hover:shadow-xl md:m-4 rounded-b-xl sm-500:w-2/5 md:w-1/4 ">

                <div className="md:hidden">
                    <Skeleton height={100} />
                </div>
                <div className="hidden md:block">
                    <Skeleton height={150} />
                </div>
    
                <p className="block px-3 py-1 text-xs font-bold text-center text-white truncate rounded-b-xl md:py-2"><Skeleton/></p>
            </div>
            ))}
        </ul>
      </section>
    )
}

export default SkeletonImageCardList
