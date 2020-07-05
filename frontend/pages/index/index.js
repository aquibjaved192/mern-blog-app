import React from 'react';
import { withRouter } from 'next/router';
import Header from '../../sharedComponents/Header/header';
import BlogCard from '../../sharedComponents/BlogCard/blogCard';
import CreateBlogButton from '../../sharedComponents/createBlogButton/createBlogButton';
import { getLocalStorage } from '../../sharedComponents/helpers';
import axios from 'axios';
import style from './home.module.scss';

class Home extends React.PureComponent {
 render() {
  const { blogs } = this.props;
  const user = getLocalStorage('user');

  const blogCards = blogs.map((blog) => {
   return <BlogCard key={blog._id} blog={blog} />;
  });

  return (
   <>
    <div className={style.container}>
     <Header />
     {blogCards}
     {user && <CreateBlogButton />}
    </div>
   </>
  );
 }
}

export async function getStaticProps() {
 const res = await axios.get('http://localhost:5000/getAllBlogs');
 const data = res.data.data;
 const blogs = [];
 data.forEach((blog) => {
  blogs.unshift(blog);
 });
 return {
  props: {
   blogs,
  },
 };
}

export default withRouter(Home);
