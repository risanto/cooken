class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super()
        this.statusCode = statusCode
        this.message = message
    }
}

const handleError = (err, res) => {
    console.log('At handleError =>', err)
    const { errors } = err

    let statusCode = 500
    let messages = []

    errors.forEach(error => {
        if (error.type === 'Validation error') {
            statusCode = 400
            messages.push(error.message)
        }

        if (error.type === 'unique violation') {
            statusCode = 400
            messages.push(error.message)
        }
    })

    res.status(statusCode).json({
        status: "error",
        statusCode,
        messages
    })
}

module.exports = {
    ErrorHandler, handleError
}