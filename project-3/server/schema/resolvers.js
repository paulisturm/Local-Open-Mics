const { AuthenticationError } = require('apollo-server-express');
// const { User } = require('../models');
// const { remove } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
    // Query: {
    //     me: async (parent, args, context) => {
    //         if (context.user) {
    //           const userData = await User.findOne({ 
    //             _id: context.user._id 
    //           })
    //           return user
    //         }
    //         throw new AuthenticationError('Not logged in');
    //         },
    //     },
        Mutation: {
            login: async (parent, { email, password }, context) => {
                const user=await User.findOne({
                    email: email
                })
                if (!user) {
                    throw new AuthenticationError('Incorrect credentials');
                }
                const isCorrectPassword = user.isCorrectPassword(password)
                if (!isCorrectPassword) {
                    throw new AuthenticationError('Incorrect credentials');
                }
                const token = signToken(user);
                return { token, user };
            },
            // addUser: async (parent, args) => {
            //     const user = await User.create(args);
            //     const token = signToken(user);
            //     return { token, user };
            // },
        },
    };

module.exports = resolvers;
