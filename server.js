import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(3000);

console.log('Running a GraphQL API server at localhost:3000/graphql');

