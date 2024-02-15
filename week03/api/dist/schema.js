// graph QL typer
const typeDefs = `#graphql 
type Query {
    hello: String
    persons: [Person]
    person(name: String!): Person
    addresses: [Address]
    address(id: ID): Address
    addressWithResidents: [addressWithPeople]
}
type Mutation {
    createPerson(name: String!, age: Int): Person
    createAddress(street: String!, housenumber: Int): Address
    deleteAddress(addressId: String!): Address
    deletePerson(personId: String!): Person
    addPersonToAddress(personId: String!, addressId: String!): Address
    removePersonFromAddress(personId: String!, addressId: String!): Address
}

type Person {
    id: ID!
    name: String!
    age: Int
    address: Address
}

type Address {
    id: ID!
    street: String!
    housenumber: Int
    residents: [Person]
}

type addressWithPeople {
    address: Address!
    residents: [Person]!
}
`;
export { typeDefs };
