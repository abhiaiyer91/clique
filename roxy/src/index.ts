import * as express from 'express';
import { get, pick, head, isArray } from 'lodash';
import * as morgan from 'morgan';
import createGateway from 'graphql-binding-gateway';
import { getUserId } from './gateway/utils';
import logger from './logger';
import typeDefinitions from './schema';
import config from './serviceMap';

const server = express();

morgan.token('userId', (req) => {
  const userId =
    get(req.headers, 'x-csod-user-id', 'SYSTEM') ||
    get(req.headers, 'x-csod-userid', 'SYSTEM') ||
    'SYSTEM';

  return isArray(userId) ? head(userId) : userId;
});

server.use(
  morgan(':method :url :user-agent :status :userId :res[content-length] - :response-time ms'),
);

createGateway({
  config,
  server,
  typeDefinitions,
  context: ({ req }) => {
    const headersToForward = [
      'x-request-id',
      'x-b3-traceid',
      'x-b3-spanid',
      'x-b3-parentspanid',
      'x-b3-sampled',
      'x-b3-flags',
      'x-ot-span-context',
      'x-userid',
    ];
    const userId = getUserId(req);

    const forwardHeaders = headersToForward && pick(req.headers, ...headersToForward);
    return {
      headers: {
        ...forwardHeaders,
        'x-userid': userId,
      },
    };
  },
});

server.get('/', (_req, res) => {
  res.send('OK');
});

server.listen(3020, () => {
  logger.info(`🚀  Roxy ready at http://localhost:3020/graphql`);
});
