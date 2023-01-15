import fastify from 'fastify';

const server = fastify();

server.get('/', async () => {
  return 'Hello World\n';
});

server.get('/ping', async () => {
  return 'pong\n';
});

server.listen({ port: 8080 ,host: '127.0.0.1'}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
