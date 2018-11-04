import * as shelljs from 'shelljs';
import server from './MockServer/server';

const DEFAULT_PORT = 1340;

const serverInstance = server.listen(DEFAULT_PORT, () => {
  shelljs.exec(
    'npm run apollo-cli -- schema:download ./src/queries/schema.json --endpoint=http://localhost:1340/graphql',
    () => {
      return serverInstance.close();
    }
  );
});
