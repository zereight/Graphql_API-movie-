export const typeDefs = ["type Person {\n    id: String!\n    name: String!\n    gender: String!\n    age: Int!\n}\n\ntype Query{\n    person: [Person]!\n}\n\ntype Mutation {\n    findId(what_Id: String!): Person!\n}"];
/* tslint:disable */

export interface Query {
  person: Array<Person>;
}

export interface Person {
  id: string;
  name: string;
  gender: string;
  age: number;
}

export interface Mutation {
  findId: Person;
}

export interface FindIdMutationArgs {
  what_Id: string;
}
