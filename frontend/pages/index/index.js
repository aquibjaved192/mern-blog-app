import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import Header from '../../sharedComponents/Header/header';
import BlogCard from '../../sharedComponents/BlogCard/blogCard';
import CreateBlogButton from '../../sharedComponents/createBlogButton/createBlogButton';
import { search } from '../../redux/reducers/getSearchReducer';
import { getLocalStorage } from '../../sharedComponents/helpers';
import axios from 'axios';
import style from './home.module.scss';

class Home extends React.PureComponent {
 constructor(props) {
  super(props);
  this.state = {
   searchPage: false,
  };
 }

 searchBlogs = (key) => {
  const { search } = this.props;
  this.setState({ searchPage: true }, () => {
   search(key);
  });
 };

 render() {
  const user = getLocalStorage('user');
  let showBlogs = [];
  const { searchPage } = this.state;
  const { blogs, searchBlogs } = this.props;
  showBlogs = searchPage ? searchBlogs : blogs;
  const blogCards = showBlogs.map((blog) => {
   return <BlogCard key={blog._id} blog={blog} />;
  });

  return (
   <>
    <div className={style.container}>
     <Header searchBlogs={this.searchBlogs} />
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

const mapStateToProps = (state) => ({
 searchBlogs: state.searchData.data,
});

const mapDispatchToProps = (dispatch) => {
 return {
  search: (key) => dispatch(search(key)),
 };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
