import server from './server';

server.listen(3020, () => {
  console.log(`🚀  Read ready at http://localhost:3020/graphql`);
});
