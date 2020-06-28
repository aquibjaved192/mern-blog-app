const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/createBlog').post((req, res) => {
 Blog.findOne({ userId: req.body.userId })
  .then((user) => {
   if (user) {
    user.blogs.push(req.body.blog);
    user.save().then(() => {
     const data = {
      blogId: req.body.blog.blogId,
      status: 200,
      message: 'success',
     };
     res.status(200).json(data);
    });
   } else {
    const userId = req.body.userId;
    const blog = req.body.blog;
    const blogs = [];
    blogs.push(blog);
    const newBlog = new Blog({ userId, blogs });
    newBlog
     .save()
     .then(() => {
      const data = {
       status: 200,
       message: 'success',
      };
      res.json(data);
     })
     .catch((err) => res.status(400).json('Error: ' + err));
   }
  })
  .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/getAllBlogs').get((req, res) => {
 Blog.find()
  .then((blogs) => {
   console.log(blogs);
  })
  .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
