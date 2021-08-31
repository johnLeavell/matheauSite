const { Router } = require('express');


const router = Router();

// user endpoints
router.get('/api/user/:id', userController.getUserById);
router.post('/api/user', userController.create);

module.exports = router;
