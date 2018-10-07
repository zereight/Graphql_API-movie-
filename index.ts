import {GraphQLServer} from "graphql-yoga";

const server : GraphQLServer = new GraphQLServer({});

const printStart = ():void => {
    console.log("Server start!");
}

server.start(printStart);