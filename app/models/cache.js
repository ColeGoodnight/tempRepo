const Redis = require("ioredis");

const redis = new Redis({
  port: 6379, // Redis port
  host: "127.0.0.1", // Redis host
  username: "awsTime", // needs Redis >= 6
  password: "pleaseWorkAWS",
  db: 0, // Defaults to 0
});

module.exports = redis;