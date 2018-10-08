
import {Person, FindIdMutationArgs} from "./TSschema";

import {persons,  getById} from "./database";

const resolvers = {
    Query: {
        person: ():Person[] => {
            return persons;
        }
    },
    Mutation: {
        findId: (_, args: FindIdMutationArgs):Person => {
            return getById(args.what_Id);
            
        }    
    }
};

export default resolvers;