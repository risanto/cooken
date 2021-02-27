import React, { useEffect, useContext } from 'react'
import { UserContext } from '../../contexts/User'
import { toastError } from '../../helpers'
import _ from 'lodash'
import Nav from '../Nav'

const RecipesICanMake = () => {
    const { findByIngredients } = useContext(UserContext)

    useEffect(() => {
        findByIngredients()
            .then(data => {
                let grouped = _.mapValues(
                    _.groupBy(data, 'usedIngredientCount'), (result) => {
                        return result
                    }
                )

                const sortKeyDesc = Object.keys(grouped)
                    .sort((a, b) => b - a)
                
                const groupedSorted = []

                sortKeyDesc.forEach(key => {
                    groupedSorted.push({
                        usedIngredients: +key,
                        recipes: grouped[key]
                    })
                })

                console.log(groupedSorted)
            })
            .catch(err => {
                toastError(err)
            })
    }, [])

    return (
        <>
            <Nav showLogo={true} />
        </>
    )
}

export default RecipesICanMake
