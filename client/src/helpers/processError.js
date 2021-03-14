export const processError = (error) => {
    let err = new Error()
    const errorData = error.response.data
    let message = errorData.messages[0]

    if (errorData.statusCode === 402) {
        message = "Sorry for the inconvenience, I'm using a free API to fetch the recipes and ingredients data, and the daily limit of 150 points has already been reached :("
    }

    err.message = message
    
    return err
}