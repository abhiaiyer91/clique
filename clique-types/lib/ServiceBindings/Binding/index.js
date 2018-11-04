"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var apollo_link_context_1 = require("apollo-link-context");
var apollo_link_http_1 = require("apollo-link-http");
var graphql_binding_1 = require("graphql-binding");
var graphql_tools_1 = require("graphql-tools");
var fetch = require("isomorphic-fetch");
var lodash_1 = require("lodash");
var typeDefinitions_1 = require("../../typeDefinitions");
function buildRootSchema(rootType) {
    return lodash_1.values(typeDefinitions_1["default"]).concat([rootType]).join(' ');
}
exports.buildRootSchema = buildRootSchema;
var ServiceLink = /** @class */ (function (_super) {
    __extends(ServiceLink, _super);
    function ServiceLink(_a) {
        var _b = _a.headers, headers = _b === void 0 ? {} : _b, uri = _a.uri;
        return _super.call(this, {
            uri: uri,
            headers: headers,
            fetch: fetch
        }) || this;
    }
    return ServiceLink;
}(apollo_link_http_1.HttpLink));
exports.ServiceLink = ServiceLink;
var ServiceBinding = /** @class */ (function (_super) {
    __extends(ServiceBinding, _super);
    function ServiceBinding(_a) {
        var typeDefs = _a.typeDefs, _b = _a.headers, headers = _b === void 0 ? {} : _b, _c = _a.headersToForward, headersToForward = _c === void 0 ? [] : _c, uri = _a.uri;
        var _this = this;
        var http = new ServiceLink({
            headers: headers,
            uri: uri
        });
        var link = apollo_link_context_1.setContext(function (_request, previousContext) {
            var previousGraphQLContext = lodash_1.get(previousContext, 'graphqlContext');
            var contextToForward = lodash_1.pick(previousGraphQLContext, headersToForward);
            var headersForContext = __assign({}, headers, lodash_1.get(previousGraphQLContext, 'headers', {}), contextToForward);
            return {
                headers: headersForContext
            };
        }).concat(http);
        var schema = graphql_tools_1.makeRemoteExecutableSchema({
            schema: typeDefs,
            link: link
        });
        _this = _super.call(this, { schema: schema }) || this;
        return _this;
    }
    ServiceBinding.prototype.queryFields = function () {
        return lodash_1.keys(this.schema.getQueryType().getFields());
    };
    ServiceBinding.prototype.mutationFields = function () {
        var mutationType = this.schema.getMutationType();
        return lodash_1.keys(mutationType && mutationType.getFields());
    };
    return ServiceBinding;
}(graphql_binding_1.Binding));
exports["default"] = ServiceBinding;
