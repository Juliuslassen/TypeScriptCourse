export const address = {
    Address: {
        residents: (parent, args, { persons }) => {
            return persons.filter((person) => person.address ? person.address.id == parent.id : false);
        }
    },
};
