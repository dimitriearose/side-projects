const {ApolloServer} = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')
require('dotenv').config()


const typeDefs = gql`
    type Query{
        sayHi: String!
    }
`

const resolvers = {
    Query: {
        sayHi: () => 'HelloWorld'
    }
 }

 const server = new ApolloServer({
     typeDefs,
     resolvers
 })

 mongoose.connect()

 server.listen({port: 5000})
    .then(res => {
        console.log(`server running on port ${res.url}`)
    })
