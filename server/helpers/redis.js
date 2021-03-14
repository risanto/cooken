const redis = require('redis')
const util = require('util')
const REDIS_PORT = process.env.REDIS_PORT
const redisClient = redis.createClient(REDIS_PORT)
redisClient.get = util.promisify(redisClient.get)

module.exports = { redisClient }
