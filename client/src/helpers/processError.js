export const processError = (error) => {
    let err = new Error()
    let message = error.response.data.messages[0]

    if (message.includes('402')) {
        message = "Sorry for the inconvenience, I'm using a free API to fetch the data and the daily limit of 150 points has already been reached :("
    }

    err.message = message
    
    return err
}