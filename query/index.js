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
        merchant: (_, { id }) => `merchant.id = ${id}`,
        storefront: (_, { id }) => `storefront.id = ${id}`
    },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
    console.log("server is running on localhost:4000");
});