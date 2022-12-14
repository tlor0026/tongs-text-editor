const router = require('express').Router();

const {
  getThoughts,
  getThoughtsById,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  createReactions,
  removeReaction
} = require('../../controllers/thoughts-controller')

// get and post /api/thoughts
router 
.route('/')
.get(getThoughts)
.post(createThoughts)

// get put and delete for api/thoughts/:id
router 
.route('/:id')
.get(getThoughtsById)
.put(updateThoughts)
.delete(deleteThoughts);

// api/thoughts/:thoughtsId/reaction

router
.route('/:id/reactions/')
.post(createReactions)
.delete(removeReaction)


module.exports = router