const redis = require('redis')
const REDIS_PORT = process.env.REDIS_PORT
const redisClient = redis.createClient(REDIS_PORT)

module.exports = { redisClient }
