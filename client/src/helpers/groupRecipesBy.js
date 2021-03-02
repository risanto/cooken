import _ from 'lodash'

export const groupRecipesBy = (data, property, sort, ingredientsLength) => {
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
        if (!isNaN(key) && key <= ingredientsLength) {
            groupedSorted.push({
                [property]: isNaN(key) ? key : +key,
                recipes: grouped[key]
            })
        }
    })

    return groupedSorted
}