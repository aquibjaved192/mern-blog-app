const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/createBlog').post((req, res) => {
 const data = {
  authorId: req.body.id,
  authorName: req.body.name,
  authorProfession: req.body.profession,
  title: req.body.title,
  content: req.body.content,
  postDate: req.body.date,
 };
 const newBlog = new Blog(data);
 newBlog
  .save()
  .then(() => {
   const data = { data: [], message: 'success', status: 200 };
   res.status(200).json(data);
  })
  .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/getAllBlogs').get((req, res) => {
 Blog.find()
  .then((blogs) => {
   blogs.forEach((blog) => {
    blog.content = blog.content.substring(0, 120);
   });
   const data = { data: blogs };
   res.status(200).json(data);
  })
  .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
