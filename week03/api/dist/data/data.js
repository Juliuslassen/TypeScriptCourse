export const addresses = [];
export const persons = [
    {
        id: '1',
        name: 'Jack',
        age: 12,
    },
    {
        id: '2',
        name: 'Chrasser',
        age: 20,
    },
    {
        id: '3',
        name: 'Snadder',
        age: 18,
    },
];
export const getResidentsOfAddresses = () => {
    { /*return addresses.map((address) => ({
      address,
      residents: persons.filter((person) => address.persons?.includes(person.id))
    }));*/
    }
    return persons.map(person => {
        const personAddresses = addresses.filter(address => address.residents.includes(person.id));
        return { person, addresses: personAddresses };
    });
};
