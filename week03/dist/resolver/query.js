import { addresses, persons } from "../data/data.js";
export const Query = {
    hello: () => 'Hello world!',
    persons: () => persons,
    person: (_parent, args, _person, _info) => {
        return persons.find((person) => person.name === args.name);
    },
    addresses: () => addresses,
    personWithAddress: (_parent, args, _person, _info) => {
        if (!args.street) {
            throw new Error("no street provided");
        }
        return persons.filter(person => {
            return personStreet && personStreet === args.street;
        });
    },
};
