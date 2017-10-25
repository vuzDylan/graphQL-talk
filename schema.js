import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = ``;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });
// const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
