const { AuthenticationError } = require('apollo-server-express')
const { User, Book } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async () => {
            return await User.findOne({_id: username})
        }
    },

    Mutation: {
        addUser: async (_, { username, email, password }) => {
            const user = await User.create({ username, email, password })
            const token = signToken(user)

            return { token, user }
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError('No user was found with these credentials')
            }

            const correctPw = await user.isCorrectPassword(password)

            if(!correctPw) {
                throw new AuthenticationError('Incorrect username or password')
            }

            const token = signToken(user)

            return { token, user }
        },

        savedBook: async(_, { _id }) => {
            return User.findOneAndUpdate(
                {_id},
                {
                    $addToSet: { books: {
                        author: [authors],
                        title: title,
                        description: description,
                        image: image,
                        link: link

                    }}
                },
                {new: true}
            )
        },

        removeBook: async(_, { id }) => {
            return User.findOneAndUpdate(
                {_id},
                {$pull:{books: {_id}}},
                {new: true}
            )
        }
    }
}