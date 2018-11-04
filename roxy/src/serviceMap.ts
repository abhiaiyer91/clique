import CoreRootTypeBinding from '@cliquelabs/types/lib/ServiceBindings/CoreBinding';
import UserRootTypeBinding from '@cliquelabs/types/lib/ServiceBindings/UserBinding';

export default {
  core: CoreRootTypeBinding({ uri: 'http://localhost:1337/graphql', headersToForward: [] }),
  user: UserRootTypeBinding({ uri: 'http://localhost:1338/graphql', headersToForward: [] }),
};
