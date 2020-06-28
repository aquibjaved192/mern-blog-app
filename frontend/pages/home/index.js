import React from 'react';
import { withRouter } from 'next/router';
import Header from '../../sharedComponents/Header/header';
import BlogCard from '../../sharedComponents/BlogCard/blogCard';
import CreateBlogButton from '../../sharedComponents/createBlogButton/createBlogButton';
import style from './home.module.scss';

class Home extends React.PureComponent {
 render() {
  const { router } = this.props;
  let userId = '';
  if (router.query && router.query.user) {
   userId = router.query.user;
  }
  return (
   <div className={style.container}>
    <Header />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <CreateBlogButton userId={userId} />
   </div>
  );
 }
}

export default withRouter(Home);
