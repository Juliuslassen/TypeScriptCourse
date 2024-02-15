import { Context } from 'vm';
import { Address, Person } from './types.js';
import { getResidentsOfAddresses } from '../data/data.js';

export const Query = {
  hello: () => 'Hello world!',
  persons: (_parent: undefined, args: Person, { persons }: Context) => persons,
  person: (
    _parent: undefined,
    args: Person,
    { persons }: Context,
    _info: any
  ) => {
    return persons.find((person: Person) => person.name === args.name);
  },
  addresses: (
    _parent: undefined,
    args: Address,
    { addresses }: Context,
    _info: any
  ) => addresses,
  address: (
    _parent: undefined,
    {id}: Address,
    { addresses }: Context,
    _info: any
  ) => {
    return addresses.find((address: Address) => address.id === id);
  },
};


