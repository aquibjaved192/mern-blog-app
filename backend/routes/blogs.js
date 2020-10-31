const router = require('express').Router();
const blogController = require('../controller/blog.controller');

router.post('/createBlog', blogController.addNew);
router.get('/getAllBlogs', blogController.getAll);
router.get('/getBlog/:id', blogController.getBlog);
router.get('/search/:key', blogController.getSearch);

module.exports = router;
