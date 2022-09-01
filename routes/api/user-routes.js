const router = require('express').Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  friendslistAdd
} = require('../../controllers/user-controller');



// GET and POST requests for localhost:3001/api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// GET ONE, PUT & DELETE for localhost:3001/api/users/:id

router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)

// Set up GET one, PUT, and DELETE at /api/users/:userId/friends/:friendId
router
  .route('/:id/friends/:friendsId')
  .post(friendslistAdd)


module.exports = router;