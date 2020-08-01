const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query {
    merchant(id: ID!): Merchant!
    storefront(id: ID!): Storefront!
}

type Merchant {
    id: ID!
    storefront: [Storefront!]!
    username: String!
}

type Storefront {
    id: ID!
    shorturl: String!
    description: String!
}

`;

const resolvers = {
    Query: {

    },
};

const server = new GraphQLServer({ typeDefs });

server.start(() => {
    console.log("server is running on localhost:4000");
});