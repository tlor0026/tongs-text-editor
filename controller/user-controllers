const {User} = require("../models")

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log("There was an error. GET ALL USERS" + err);
        res.status(400).json(err)
      });
  },
  // get one user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'There is no User with this ID.' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log('There was an error. FIND ONE USER ' + err);
        res.status(400).json(err);
      });
  },
  // create User
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },

  // update user by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body,  { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  //  Remove a user's associated thoughts when deleted.
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  // Friends list /api/users/:userId/friends/:friendId
  friendslistAdd({params}, res) {
    User.findOneAndUpdate({
      id_: params.id
    },
      {$push: { friends: params.friendsId}},
      {new: true},
    )
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(400).json(err));
  }


};

module.exports = userController;