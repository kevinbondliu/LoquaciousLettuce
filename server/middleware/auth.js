const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const config = require('config')['redis'];
console.log(config);
const redisClient = require('redis').createClient(config['REDIS_URL'] || null);

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports.session = session({
  store: new RedisStore({
    client: redisClient,
    host: 'localhost',
    port: 6379
  }),
  secret: 'more laughter, more love, more life',
  resave: false,
  saveUninitialized: false
});
