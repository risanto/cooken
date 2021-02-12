const protectUserCooken = (req, res, next) => {
    if (+req.user.id === 1) {
        return res.sendStatus(403)
    } else {
        next()
    }
}

module.exports = protectUserCooken