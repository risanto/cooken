const bcrypt = require('bcrypt')
const saltRounds = 10

const hashPassword = async (password) => {
    return bcrypt.hash(password, saltRounds)
}

const compareHash = async (password, hash) => {
    return bcrypt.compare(password, hash)
}

module.exports = { hashPassword, compareHash }