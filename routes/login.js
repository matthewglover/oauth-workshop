const querystring = require('querystring');

const GITHUB_AUTH_PARAMS =
  querystring.stringify({
    client_id: process.env.CLIENT_ID,
    redirect_uri: `${process.env.BASE_URL}/welcome`,
  });

const GITHUB_AUTH_URL =
  `https://github.com/login/oauth/authorize?${GITHUB_AUTH_PARAMS}`;

module.exports = {
  method: 'GET',
  path: '/login',
  handler(req, reply) {
    reply.redirect(GITHUB_AUTH_URL);
  },
};
