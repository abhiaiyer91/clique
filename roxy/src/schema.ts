import { values } from 'lodash';
import typeDefinitions from '@cliquelabs/types/lib/typeDefinitions';
import RootType from '@cliquelabs/types/lib/RootType';

export default [...values(typeDefinitions), RootType].join(' ');
