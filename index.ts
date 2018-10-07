import {GraphQLServer,Options} from "graphql-yoga";

import resolvers from "./graphql/resolvers";

import cors from "cors";
import logger from "morgan";
import helmet from "helmet";

class Server{
    public server: GraphQLServer;
    
    public Option : Options = {
    
        port: process.env.PORT || 4000,
        playground: "/playground",
        endpoint: "/graphql"
    };
    
    public server_Starter = ():void => {
        this.server.express.use(cors());
        this.server.express.use(helmet());
        this.server.express.use(logger("start"));
    };
    
    constructor(){
        this.server = new GraphQLServer({
            typeDefs: "graphql/schema.graphql",
            resolvers: resolvers
        });
        this.server_Starter();
    }
    
};

const printUsingPORT = ():void => {
    console.log(`Using PORT : ${newServer.Option.port}`);
}

const newServer = new Server();
newServer.server.start(newServer.Option,printUsingPORT);

