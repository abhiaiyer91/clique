import { values } from 'lodash';
import typeDefinitions from '@workpop/frontline-types/lib/typeDefinitions';
import RootType from '@workpop/frontline-types/lib/RootType';

export default [...values(typeDefinitions), RootType].join(' ');
