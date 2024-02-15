
// graph QL typer
const typeDefs = `#graphql 
type Query {
    hello: String
    persons: [Person]
    person(name: String!): Person
    addresses: [Address]
    personWithAddress(streetname: String!): [Person]
}
type Mutation {
    createPerson(name: String!, age: Int): Person
    createAddress(street: String!, housenumber: Int): Address
    deleteAddress(street: String!, housenumber: Int): Address
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
    person: [Person]
}
`;
  
export {typeDefs};