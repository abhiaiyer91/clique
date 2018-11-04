import { HttpLink } from 'apollo-link-http';
import { GraphQLSchema } from 'graphql';
import { Binding } from 'graphql-binding';
export declare function buildRootSchema(rootType: any): string;
export declare class ServiceLink extends HttpLink {
    schema: GraphQLSchema;
    constructor({ headers, uri }: {
        headers?: {};
        uri: any;
    });
}
export default class ServiceBinding extends Binding {
    constructor({ typeDefs, headers, headersToForward, uri }: {
        typeDefs: any;
        headers?: {};
        headersToForward?: any[];
        uri: any;
    });
    queryFields(): string[];
    mutationFields(): string[];
}
