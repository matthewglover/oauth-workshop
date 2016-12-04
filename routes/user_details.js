const request = require('request');

const getUserDetails = (accessToken, cb) => {
  request.get({
    url: 'https://api.github.com/user',
    headers: {
      'User-Agent': 'oauth-workshop',
      Authorization: `token ${accessToken}`,
    },
  }, cb);
};

module.exports = {
  method: 'GET',
  path: '/user_details',
  config: {
    auth: 'session',
    handler(req, reply) {
      getUserDetails(req.auth.credentials.access_token, (err, response, body) => {
        if (err) throw err;
        reply(JSON.parse(body));
      });
    },
  },
};
