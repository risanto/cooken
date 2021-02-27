import _ from 'lodash'

export const groupBy = (data, property, sort) => {
    let grouped = _.mapValues(
        _.groupBy(data, property), (result) => {
            return result
        }
    )
    
    let sortKeys
    
    if (sort === 'desc') {
        sortKeys = Object.keys(grouped)
            .sort((a, b) => b - a)
    } else {
        sortKeys = Object.keys(grouped).sort()
    }
    
    let groupedSorted = []

    sortKeys.forEach(key => {
        groupedSorted.push({
            usedIngredients: +key,
            recipes: grouped[key]
        })
    })

    return groupedSorted
}