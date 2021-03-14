const redis = require('redis')
const util = require('util')

let redisClient

if (process.env.NODE_ENV === 'development') {
    redisClient = redis.createClient(process.env.REDIS_PORT)
} else {
    redisClient = redis.createClient(process.env.REDIS_URL)
}

redisClient.get = util.promisify(redisClient.get)

module.exports = { redisClient }
