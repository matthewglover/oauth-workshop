const Hapi = require('hapi');
const Inert = require('inert');


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

const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 4000 });

server.register([Inert], (registerError) => {
  if (registerError) throw registerError;

  server.route([defaultRoute]);
});

module.exports = server;
