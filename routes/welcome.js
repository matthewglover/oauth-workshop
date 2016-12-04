
module.exports = {
  method: 'GET',
  path: '/welcome',
  handler(req, reply) {
    reply(req.query);
  },
};
