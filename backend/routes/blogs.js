const router = require('express').Router();
const blogController = require('../controller/blog.controller');

router.post('/createBlog', blogController.addNew);
router.get('/getAllBlogs', blogController.getAll);

module.exports = router;
