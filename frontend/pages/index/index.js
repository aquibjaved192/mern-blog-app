import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import Header from '../../sharedComponents/Header/header';
import BlogCard from '../../sharedComponents/BlogCard/blogCard';
import CreateBlogButton from '../../sharedComponents/createBlogButton/createBlogButton';
import { getLocalStorage } from '../../sharedComponents/helpers';
import { showSearchChange } from '../../redux/reducers/getSearchReducer';
import axios from 'axios';
import style from './home.module.scss';

class Home extends React.PureComponent {
 componentWillUnmount() {
  const { showSearchChange } = this.props;
  showSearchChange(false);
 }

 render() {
  const user = getLocalStorage('user');
  let showBlogs = [];
  const { blogs, searchBlogs, showSearch } = this.props;
  showBlogs = showSearch ? searchBlogs : blogs;
  const blogCards =
   showBlogs.length > 0 &&
   showBlogs.map((blog) => {
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
 showSearch: state.searchData.showSearch,
});

const mapDispatchToProps = (dispatch) => {
 return {
  showSearchChange: (payload) => dispatch(showSearchChange(payload)),
 };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
