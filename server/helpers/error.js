class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super()
        this.statusCode = statusCode
        this.message = message
    }
}

const handleError = (err, res) => {
    console.log(err)
    const { statusCode, message } = err
    console.log('ERROR', statusCode, message)
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    })
}

module.exports = {
    ErrorHandler, handleError
}