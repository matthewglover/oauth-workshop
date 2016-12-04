const Hapi = require('hapi');
const Inert = require('inert');
const CookieAuth = require('hapi-auth-cookie');

const routes = require('./routes');

const defaultRoute = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: './public',
      listing: false,
    },
  },
};

const cookieOptions = {
  password: process.env.COOKIE_PASSWORD,
  cookie: 'app-cookie',
  isSecure: process.env.NODE_ENV === 'PRODUCTION',
  ttl: 24 * 60 * 60 * 1000,
};

const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 4000 });

server.register([Inert, CookieAuth], (registerError) => {
  if (registerError) throw registerError;

  server.auth.strategy('session', 'cookie', cookieOptions);

  server.route([defaultRoute, ...routes]);
});

module.exports = server;
