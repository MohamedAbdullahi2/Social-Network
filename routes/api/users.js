const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user');

// /api/user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

// /api/user/:id
router  
    .route('/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser)

    // /api/userId/friends
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router;