const { ApolloServer } = require("apollo-server")
const mongoose = require("mongoose")
const { MONGODB } = require("./config")
const typeDefs = require("./graphql/typedefs")
const resolvers = require("./graphql/resolvers")

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongo")
    return server.listen({ port: 5000 }).then((res) => {
      console.log(`server running on port ${res.url}`)
    })
  })
