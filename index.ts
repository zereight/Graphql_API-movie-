import {GraphQLServer} from "graphql-yoga";

import resolvers from "./graphql/resolvers";

const server : GraphQLServer = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers
});

const printStart = ():void => {
    console.log("Server start!");
}

server.start(printStart);