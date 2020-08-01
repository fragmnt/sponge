const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
    type Query {

    }
`;

const resolvers = {
    Query: {

    },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
    console.log("server is running on localhost:4000");
});