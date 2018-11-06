"use strict";
/******************************************************************************
*
* DO NOT EDIT THIS FILE.
*
* The contents of this file were generated by generateServiceBindings.ts
*
******************************************************************************/
exports.__esModule = true;
var Schemas_1 = require("../Schemas");
var graphql_service_binding_1 = require("graphql-service-binding");
var typeDefinitions_1 = require("../typeDefinitions");
function CoreRootTypeBinding(_a) {
    var uri = _a.uri, headersToForward = _a.headersToForward;
    return new graphql_service_binding_1["default"]({
        typeDefs: graphql_service_binding_1.buildRootSchema(Schemas_1.CoreRootType, typeDefinitions_1["default"]),
        uri: uri,
        headersToForward: headersToForward
    });
}
exports["default"] = CoreRootTypeBinding;
