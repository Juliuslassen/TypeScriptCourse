// npm install @apollo/server express graphql cors
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { typeDefs } from './schema.js';
import { persons, addresses } from './data/data.js';
import { Mutation } from './resolver/mutation.js';
import { Query } from './resolver/query.js';
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use('/graphql', cors(), express.json(), expressMiddleware(server, {
    context: async () => ({
        persons,
        addresses
    })
}));
await new Promise((resolve) => httpServer.listen({ port: 4001 }, resolve));
console.log(`🚀 Server ready at http://localhost:4001/graphql`);
