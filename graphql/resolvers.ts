
import {Person} from "./TSschema";

const resolvers = {
    Query: {
        person: ():Person => {
            return {
                name: "Park",
                gender: "female",
                age: 25
            };
        }
    }
};

export default resolvers;