import typeDefinitions from "@cliquelabs/types/lib/typeDefinitions";
import { CoreRootType } from "@cliquelabs/types/lib/Schemas";

export default [...Object.values(typeDefinitions), CoreRootType].join(" ");
