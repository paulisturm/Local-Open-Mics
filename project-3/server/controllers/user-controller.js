const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    // get all users
    async getsingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });

        if (!foundUser) {
            return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }

        res.json(foundUser);
    },

    // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
    async login({ body }, res) {
            const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
            if (!user) {
                return res.status(400).json({ message: "Can't find this user" });
            }

            const correctPw = await user.isCorrectPassword(body.password);

            if (!correctPw) {
                return res.status(400).json({ message: 'Wrong password!' });
            }
            const token = signToken(user);
            res.json({ token, user });
        },
        // save an event to a user's `savedEvents` field by adding it to the set (to prevent duplicates)
        async saveEvent({ user, body }, res) {
            
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedEvents: body } },
                    { new: true, runValidators: true }
                );
                return res.json(updatedUser);
            } catch (err) {

                return res.status(400).json(err);
            }
        },

        // remove an event from `savedEvents`
        async deleteEvent({ user, params }, res) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedEvents: { eventId: params.eventId } } },
                { new: true }
            );
            if (!updatedUser) {
                return res.status(404).json({ message: "Couldn't find user with this id!" });
            }
            return res.json(updatedUser);
        },
    };
