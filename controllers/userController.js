const { User, Thought } = require('../models');

module.exports = {
    // get all users
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    // get a single user by its _id
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // update a user by its _id
    // remove a user by its _id
     // BONUS: Remove a user's associated thoughts when deleted
    // add a new friend to a user's friend list
    // remove a friend from a user's friend list
};