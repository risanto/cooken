const { verifyAccessToken } = require('../helpers/jwt')

const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token) return res.sendStatus(401)
        req.user = verifyAccessToken(token)
        next()

    } catch (error) {
        console.log('Error auth ===>', error)
        if (error) return res.status(400).send('Invalid token!')
    }
}

module.exports = auth