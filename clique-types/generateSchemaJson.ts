import * as shelljs from 'shelljs';
import server from './MockServer/server';

const DEFAULT_PORT = 1338;

const serverInstance = server.listen(DEFAULT_PORT, () => {
  shelljs.exec(
    'npm run apollo-cli -- schema:download ./src/queries/schema.json --endpoint=http://localhost:1338/graphql',
    () => {
      return serverInstance.close();
    }
  );
});
