import { Context } from "vm";
import { addresses, persons } from "../data/data.js";
import { Address, Person } from "./types.js";

export const Mutation = {
    createPerson: (_parent:never, args: Person, _person: Context) => {
      const newPerson = {
        id: String(persons.length + 1),
        name: args.name,
        age: args.age,
        address: addresses[1],
      };
      persons.push(newPerson);
      return newPerson;
    },
    createAddress: (_parent:never, args: Address, _address: Context) => {
        const newAddress = {
            id: String(addresses.length + 1),
            street: args.street,
            housenumber: args.housenumber,
            persons: persons[1]
        }
        addresses.push(newAddress);
        return newAddress;
    },
    deleteAddress: (_parent:never, args: Address, _address: Context) => {
        // 
    }
  };
