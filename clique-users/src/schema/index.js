import typeDefinitions from "@cliquelabs/types/lib/typeDefinitions";
import { UserRootType } from "@cliquelabs/types/lib/Schemas";

export default [...Object.values(typeDefinitions), UserRootType].join(" ");
