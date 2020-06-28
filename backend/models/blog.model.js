const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema(
 {
  userId: {
   type: String,
   required: true,
  },
  blogs: {
   type: Array,
   required: true,
  },
 },
 {
  timestamps: true,
 }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
