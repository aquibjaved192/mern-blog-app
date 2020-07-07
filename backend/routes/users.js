const router = require('express').Router();
const userController = require('../controller/user.controller');

router.post('/login', userController.login);
router.post('/signup', userController.signup);

module.exports = router;
