import { addresses, persons } from "../data/data.js";
export const Mutation = {
    createPerson: (_parent, args, _person) => {
        const newPerson = {
            id: String(persons.length + 1),
            name: args.name,
            age: args.age,
            address: addresses[1],
        };
        persons.push(newPerson);
        return newPerson;
    },
    createAddress: (_parent, args, _address) => {
        const newAddress = {
            id: String(addresses.length + 1),
            street: args.street,
            housenumber: args.housenumber,
            persons: [args.person]
        };
        addresses.push(newAddress);
        return newAddress;
    }
};
