import { Context } from "vm";
import { persons } from "../data/data.js";
import { Address, Person } from "./types.js";

export const Query = {
    hello: () => 'Hello world!',
    persons: () => persons,
    person: (_parent: undefined, args: Person, _person: Context, _info: any) => {
      return persons.find((person) => person.name === args.name);
    },
    addresses: (_parent: undefined, args: Address, {addresses}: Context, _info: any) => addresses,
    personWithAddress: (_parent: undefined, args: Address, {addresses}: Context, _info: any) => {
      if(!args.street){
        throw new Error("no street provided")
      }

        return persons.find((person) => person.address.street === args.street);
    },
};