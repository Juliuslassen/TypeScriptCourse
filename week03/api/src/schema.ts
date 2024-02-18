
// graph QL typer
const typeDefs = `#graphql 
type Query {
    """
        Returns helloworld
    """
    hello: String
    """
    returns all person
    """
    persons: [Person]
    """
    returns a person based on name
    """
    person(name: String!): Person
    """
    returns all address
    """
    addresses: [Address]
    """
    returns a address based on id
    """
    address(id: ID): Address
}
type Mutation {
    createPerson(name: String!, age: Int, imageUrl: String): Person
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
    imageUrl: String!
    address: Address
}

type Address {
    id: ID!
    street: String!
    housenumber: Int
    residents: [Person!]!
}

`;
  
export {typeDefs};