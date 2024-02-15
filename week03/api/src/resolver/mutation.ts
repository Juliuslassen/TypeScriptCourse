import { Context } from "vm";
import { Address, Person } from "./types.js";

export const Mutation = {
    createPerson: (_parent:never, args: Person, { persons, addresses }: Context) => {
      const newPerson = {
        id: String(persons.length + 1),
        name: args.name,
        age: args.age,
        addresses: null
      };
      persons.push(newPerson);
      return newPerson;
    },
    createAddress: (_parent:never, args: Address, { persons , addresses } : Context) => {
        const newAddress = {
            id: String(addresses.length + 1),
            street: args.street,
            housenumber: args.housenumber,
            persons: null
        }
        addresses.push(newAddress);
        return newAddress;
    },
    deleteAddress: (_parent:never, {addressId}: {addressId: string}, { addresses }: Context) => {
      const address: Address = addresses.find((address: Address) => address.id = addressId)
      const index: Number = addresses.findIndex((address: Address) => address.id = addressId)

      if(index){
        addresses.splice(index, 1);
      }

      return address;
    },
    deletePerson: (_parent:never, {personId}: {personId: String}, { persons }: Context) => {
      const person: Person = persons.find((person: Person) => person.id === personId);
      const index: Number = persons.findIndex((person: Person) => person.id === personId);

      if(index){
        persons.splice(index, 1);
      }
      return person;
    },
    addPersonToAddress: (_parent:never, {personId, addressId}: {personId: string, addressId: string}, { persons , addresses } : Context) => {
      const person: Person = persons.find((person: Person) => person.id === personId);
      const address: Address = addresses.find((address: Address) => address.id === addressId);  
      
      if (!person || !address) {
        throw new Error('Person or Address not found!');
      }
      
      if (!address.residents) {
        address.residents = [];
      }

      // Check if the person already exists at the address
      if (address.residents.includes(person)) {
        throw new Error('Person is already associated with this address!');
      }
      
      address.residents.push(person);
      person.address = address;

      return address;
    },
    removePersonFromAddress: (_parent:never, {personId, addressId}: {personId: string, addressId: string}, { persons , addresses } : Context) => {
      const person: Person = persons.find((person: Person) => person.id === personId);
      const address: Address = addresses.find((address: Address) => address.id === addressId);  

      if(addresses.residents){
        const indexNumber = addresses.findIndex((resident: Person) => resident.id = person.id)
        address.residents?.splice(indexNumber,1);
      }else {
        throw new Error('Person not at resident')
      }
      return address;
    },

  };
