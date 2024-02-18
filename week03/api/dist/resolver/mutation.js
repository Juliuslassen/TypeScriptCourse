import { GraphQLError } from "graphql";
export const Mutation = {
    createPerson: (_parent, args, { persons, addresses }) => {
        const newPerson = {
            id: String(persons.length + 1),
            name: args.name,
            age: args.age,
            imageUrl: args.imageUrl,
            address: undefined
        };
        persons.push(newPerson);
        return newPerson;
    },
    createAddress: (_parent, args, { persons, addresses }) => {
        const newAddress = {
            id: String(addresses.length + 1),
            street: args.street,
            housenumber: args.housenumber,
            residents: undefined
        };
        addresses.push(newAddress);
        return newAddress;
    },
    deleteAddress: (_parent, { addressId }, { addresses }) => {
        const address = addresses.find((address) => address.id = addressId);
        const index = addresses.findIndex((address) => address.id = addressId);
        console.log(index);
        if (!index) {
            throw new GraphQLError("address not found");
        }
        if (index === -1) {
            throw new GraphQLError("false input");
        }
        if (index) {
            addresses.splice(index, 1);
        }
        return address;
    },
    deletePerson: (_parent, { personId }, { persons }) => {
        const person = persons.find((person) => person.id === personId);
        const index = persons.findIndex((person) => person.id === personId);
        if (!index) {
            throw new GraphQLError("person not found");
        }
        if (index === -1) {
            throw new GraphQLError("false input");
        }
        if (index) {
            persons.splice(index, 1);
        }
        return person;
    },
    addPersonToAddress: (_parent, { personId, addressId }, { persons, addresses }) => {
        const person = persons.find((person) => person.id === personId);
        const address = addresses.find((address) => address.id === addressId);
        if (!person || !address) {
            throw new GraphQLError('Person or Address not found!');
        }
        if (!address.residents) {
            address.residents = [];
        }
        // Check if the person already exists at the address
        if (address.residents.includes(person)) {
            throw new GraphQLError('Person is already associated with this address!');
        }
        address.residents.push(person);
        person.address = address;
        return address;
    },
    removePersonFromAddress: (_parent, { personId, addressId }, { persons, addresses }) => {
        const person = persons.find((person) => person.id === personId);
        const address = addresses.find((address) => address.id === addressId);
        const indexNumber = addresses.findIndex((resident) => resident.id = person.id);
        if (indexNumber === -1 || !person || !address) {
            throw new GraphQLError('Person not at resident');
        }
        person.address = undefined;
        address.residents?.splice(indexNumber, 1);
        return address;
    },
};
