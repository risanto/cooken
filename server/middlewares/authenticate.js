const { verifyAccessToken } = require('../helpers/jwt')

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token) return res.sendStatus(401)

        req.user = await verifyAccessToken(token)
        next()

    } catch (error) {
        console.log(error)
        if (error) res.sendStatus(403)
    }
}

module.exports = authenticate