
/******************************************************************************
*
* DO NOT EDIT THIS FILE.
*
* The contents of this file were generated by generateServiceBindings.ts
*
******************************************************************************/

  import { CoreRootType } from '../Schemas'
  import ServiceBinding, { buildRootSchema } from './Binding';

  interface ICreateBinding {
    uri: string,
    headersToForward: string[]
  }

  export default function CoreRootTypeBinding({ uri, headersToForward }: ICreateBinding) {
    return new ServiceBinding({
      typeDefs: buildRootSchema(CoreRootType),
      uri,
      headersToForward,
    });
  }
