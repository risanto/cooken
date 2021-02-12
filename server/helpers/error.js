class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super()
        this.statusCode = statusCode
        this.message = message
    }
}

const handleError = (err, res) => {
    console.log('At handleError =>', err.message)
    let { statusCode, message, errors } = err

    if(!statusCode) statusCode = 500
    let messages = []

    errors?.forEach(error => {
        if (error.type === 'Validation error'
            || error.type === 'unique violation'
        ) {
            statusCode = 400
            messages.push(error.message)
        }
    })

    if (!messages.length) messages.push(message)

    res.status(statusCode).json({
        status: "error",
        statusCode,
        messages
    })
}

module.exports = {
    ErrorHandler, handleError
}