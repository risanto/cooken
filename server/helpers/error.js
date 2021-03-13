class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super()
        this.statusCode = statusCode
        this.message = message
    }
}

const handleError = (err, res) => {
    let statusCode, message, errors

    if (err.response?.data) {
        console.log('\n At handleError =>', err.response.data)
        err = err.response.data
        statusCode = err.code
        message = err.message
    } else {
        console.log('\n At handleError =>', err)
        statusCode = err.statusCode
        message = err.message
        errors = err.errors
    }

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

    res.status(statusCode || status).json({
        status: "error",
        statusCode,
        messages
    })
}

module.exports = {
    ErrorHandler, handleError
}