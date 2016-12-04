const request = require('request');

const getAccessToken = (code, cb) => {
  request.post({
    url: 'https://github.com/login/oauth/access_token',
    headers: {
      Accept: 'application/json',
    },
    form: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: `${process.env.BASE_URL}/welcome`,
      code,
    },
  }, cb);
};

module.exports = {
  method: 'GET',
  path: '/welcome',
  handler(req, reply) {
    getAccessToken(req.query.code, (err, response, body) => {
      if (err) throw err;
      reply(body);
    });
  },
};
