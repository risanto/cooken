const { hashPassword, compareHash } = require('./bcrypt')
const { ErrorHandler, handleError } = require('./error')
const { generateAccessToken, verifyAccessToken } = require('./jwt')
const { validateEmail } = require('./validateEmail')
const { redisClient } = require('./redis')

module.exports = { hashPassword, compareHash, ErrorHandler, handleError, generateAccessToken, verifyAccessToken, validateEmail, redisClient }