export const typeDefs = ["type Person {\n    id: String!\n    name: String!\n    gender: String!\n    age: Int!\n}\n\ntype Query{\n    person: Person!\n}"];
/* tslint:disable */

export interface Query {
  person: Person;
}

export interface Person {
  id: string;
  name: string;
  gender: string;
  age: number;
}
