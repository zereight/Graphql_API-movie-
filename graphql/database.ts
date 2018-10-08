import {Person} from "./TSschema";

export var persons = [
  {
    id: "0",
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: "1",
    name: "Jisu",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Japan Guy",
    age: 18,
    gender: "male"
  },
  {
    id: "3",
    name: "Daal",
    age: 18,
    gender: "male"
  },
  {
    id: "4",
    name: "JD",
    age: 18,
    gender: "male"
  },
  {
    id: "5",
    name: "moondaddi",
    age: 18,
    gender: "male"
  },
  {
    id: "6",
    name: "flynn",
    age: 18,
    gender: "male"
  }
];

export const getById = (what_Id: string):Person => {
  const fillteredPerson = persons.filter( person => person.id === String(what_Id));
  return fillteredPerson[0];
};

export const addMovie = (_name, _age, _gender):void => {
  const newMovie = {
    id: String(parseInt(persons [ persons.length - 1 ].id) + 1)  ,
    name: _name,
    age: _age,
    gender: _gender
  };
  
  persons.push( newMovie );
  
  
  
}; // persons 를 const, let 으로 안두고 var한 이유 (함수에서 변하게하려고)

export const deleteMovieById = ( _id: string ):void => {
  
  try{
    persons = persons.filter( human => human.id !== _id );
  } catch (error){
    console.log(error);
  }
  
}