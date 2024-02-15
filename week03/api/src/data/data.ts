export const addresses = [
  {
    id: '1',
    street: 'snaddervej',
    housenumber: 2,
    residents: ['1', '3'] // References to person IDs living at this address
  },
  {
    id: '2',
    street: 'jackervej',
    housenumber: 2,
    residents: ['2'] // References to person IDs living at this address
  },
];

export const persons = [
  {
    id: '1',
    name: 'Jack',
    age: 12,
    address: [0],
  },
  {
    id: '2',
    name: 'Chrasser',
    age: 20,
    address: [1]
  },
  {
    id: '3',
    name: 'Snadder',
    age: 18,
    address: [1],
  },
];

export const getResidentsOfAddresses = () => {
  {/*return addresses.map((address) => ({
    address,
    residents: persons.filter((person) => address.persons?.includes(person.id))
  }));*/}
  return persons.map(person => {
    const personAddresses = addresses.filter(address => address.residents.includes(person.id));
    return { person, addresses: personAddresses };
  });
}