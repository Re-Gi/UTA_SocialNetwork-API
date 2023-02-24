const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    // get a single thought by its _id
    // create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) => {
                if(!user) {
                    res.status(404).json({ message: 'Thought created, but found no user with that ID.' });
                } else {
                    res.status(200).json('Thought created!');
                };
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // update a thought by its _id
    // remove a thought by its _id
    // create a reaction stored in a single thought's reactions array field
    // pull and remove a reaction by the reaction's reactionId value
};