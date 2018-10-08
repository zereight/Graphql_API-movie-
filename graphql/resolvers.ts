
import {Person, FindIdMutationArgs, AddSomeMovieMutationArgs, DeleteSomeMovieByIdMutationArgs} from "./TSschema";

import {persons,  getById, addMovie, deleteMovieById} from "./database";

const resolvers = {
    Query: {
        person: ():Person[] => {
            return persons;
        }
    },
    Mutation: {
        
        findId: (_, args: FindIdMutationArgs):Person => {
            return getById(args.what_Id);
        } ,
        
        addSomeMovie: (_, args:AddSomeMovieMutationArgs ):boolean => {
            
            try{
                addMovie(args.name, args.age, args.gender );
                return true;
            }
            catch(error){
                return false;
            }
            
        } ,
        
        deleteSomeMovieById: (_, args: DeleteSomeMovieByIdMutationArgs):boolean => {
            try{
                deleteMovieById(args.id);
                return true;
            } catch(error){
                return false;
            }
        }
        
    }
};

export default resolvers;