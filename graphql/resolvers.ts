
import {Person} from "./TSschema";

import {persons} from "./database";

const resolvers = {
    Query: {
        person: ():Person[] => {
            return persons;
        }
    }
};

export default resolvers;