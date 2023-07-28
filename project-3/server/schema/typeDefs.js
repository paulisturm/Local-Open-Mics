const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        eventCount: Int
        savedEvents: [Event]
    }
    type Event {
        _id: ID
        eventTitle: String
        eventDescription: String
        eventDate: String
        eventTime: String
        eventLocation: String
        eventLink: String
        eventImage: String
        eventCategory: String
        eventPrice: String
        eventHost: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveEvent(eventTitle: String!, eventDescription: String!, eventDate: String!, eventTime: String!, eventLocation: String!, eventLink: String!, eventImage: String!, eventCategory: String!, eventPrice: String!, eventHost: String!): Event
        removeEvent(eventId: ID!): Event
    }
`;
module.exports = typeDefs;

