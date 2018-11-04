import CoreRootTypeBinding from '@clique/types/lib/ServiceBindings/CoreBinding';
import UserRootTypeBinding from '@clique/types/lib/ServiceBindings/UserBinding';

export default {
  core: CoreRootTypeBinding({ uri: 'http://localhost:1338/graphql/core', headersToForward: [] }),
  user: UserRootTypeBinding({ uri: 'http://localhost:1338/graphql/user', headersToForward: [] }),
};
