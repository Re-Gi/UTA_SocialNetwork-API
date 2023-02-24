const { User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    // get a single thought by its _id
    // create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    // update a thought by its _id
    // remove a thought by its _id
    // create a reaction stored in a single thought's reactions array field
    // pull and remove a reaction by the reaction's reactionId value
};