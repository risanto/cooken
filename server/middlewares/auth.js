const { verifyAccessToken } = require('../helpers/jwt')

const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token) return res.sendStatus(401)

        req.user = await verifyAccessToken(token)
        next()

    } catch (error) {
        console.log(error)
        if (error) return res.sendStatus(403)
    }
}

module.exports = auth