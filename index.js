require('env2')('./config.env');

const server = require('./server');

server.start((startError) => {
  if (startError) throw startError;
  console.log(`Server running at: ${server.info.uri}`);
});
