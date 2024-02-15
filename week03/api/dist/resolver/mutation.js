export const Mutation = {
    createPerson: (_parent, args, { persons, addresses }) => {
        const newPerson = {
            id: String(persons.length + 1),
            name: args.name,
            age: args.age,
            addresses: null
        };
        persons.push(newPerson);
        return newPerson;
    },
    createAddress: (_parent, args, { persons, addresses }) => {
        const newAddress = {
            id: String(addresses.length + 1),
            street: args.street,
            housenumber: args.housenumber,
            persons: null
        };
        addresses.push(newAddress);
        return newAddress;
    },
    deleteAddress: (_parent, { addressId }, { addresses }) => {
        const address = addresses.find((address) => address.id = addressId);
        const index = addresses.findIndex((address) => address.id = addressId);
        if (index) {
            addresses.splice(index, 1);
        }
        return address;
    },
    deletePerson: (_parent, { personId }, { persons }) => {
        const person = persons.find((person) => person.id === personId);
        const index = persons.findIndex((person) => person.id === personId);
        if (index) {
            persons.splice(index, 1);
        }
        return person;
    },
    addPersonToAddress: (_parent, { personId, addressId }, { persons, addresses }) => {
        const person = persons.find((person) => person.id === personId);
        const address = addresses.find((address) => address.id === addressId);
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
    removePersonFromAddress: (_parent, { personId, addressId }, { persons, addresses }) => {
        const person = persons.find((person) => person.id === personId);
        const address = addresses.find((address) => address.id === addressId);
        if (addresses.residents) {
            const indexNumber = addresses.findIndex((resident) => resident.id = person.id);
            address.residents?.splice(indexNumber, 1);
        }
        else {
            throw new Error('Person not at resident');
        }
        return address;
    },
};
