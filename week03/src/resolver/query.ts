import { Context } from "vm";
import { Address, Person } from "./types.js";

export const Query = {
    hello: () => 'Hello world!',
    persons: (_parent: undefined, args: Person, {persons}: Context) => persons,
    person: (_parent: undefined, args: Person, {persons}: Context, _info: any) => {
      return persons.find((person: Person) => person.name === args.name);
    },
    addresses: (_parent: undefined, args: Address, {addresses}: Context, _info: any) => addresses,
    personWithAddress: (_parent: undefined, args: Address, {persons , addresses}: Context, _info: any) => {
      if(!args.street){
        throw new Error("no street provided")
      }

        return addresses.map(() => {
          persons.find((person: Person) => person.address.street === args.street)
        });
    },
};