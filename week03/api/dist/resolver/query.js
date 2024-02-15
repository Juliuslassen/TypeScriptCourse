import { getResidentsOfAddresses } from '../data/data.js';
export const Query = {
    hello: () => 'Hello world!',
    persons: (_parent, args, { persons }) => persons,
    person: (_parent, args, { persons }, _info) => {
        return persons.find((person) => person.name === args.name);
    },
    addresses: (_parent, args, { addresses }, _info) => addresses,
    address: (_parent, { id }, { addresses }, _info) => {
        return addresses.find((address) => address.id === id);
    },
    addressWithResidents: (_parent, _args, { persons, addresses }) => getResidentsOfAddresses,
};
