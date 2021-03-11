export const processError = (error) => {
    let err = new Error()
    let message = error.response.data.messages[0]

    if (message.includes('402')) {
        message = "Sorry for the inconvenience, I'm using Spoonacular's free plan and the daily points limit of 150 API calls has already been reached :("
    }

    err.message = message
    
    return err
}