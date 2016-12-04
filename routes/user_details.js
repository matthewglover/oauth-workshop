

module.exports = {
  method: 'GET',
  path: '/user_details',
  config: {
    auth: 'session',
    handler(req, reply) {
      reply(req.auth.credentials);
    },
  },
};
