import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import Header from '../../sharedComponents/Header/header';
import { create } from '../../redux/reducers/createBlogReducer';
import style from './create.module.scss';
import { getLocalStorage } from '../../sharedComponents/helpers';

class CreateBlogPage extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   title: '',
   content: '',
  };
 }

 componentDidMount() {
  const user = getLocalStorage('user');
  const { router } = this.props;
  if (!user) {
   router.push('/login');
  }
 }

 handleChange = (e, fieldName) => {
  this.setState({
   [fieldName]: e.target.value,
  });
 };

 onSubmit = () => {
  const { title, content } = this.state;
  const { create, router } = this.props;
  const date = new Date();
  if (title && content) {
   const data = {
    id: user.id,
    name: user.name,
    profession: user.profession,
    title: title,
    content: content,
    date: date,
   };
   create(data);
  }
 };

 render() {
  return (
   <div className={style.container}>
    <Header />
    <div className={style.editors}>
     <textarea
      placeholder="Enter title here..."
      className={style.title}
      rows="1"
      onChange={(e) => this.handleChange(e, 'title')}
     />
     <textarea
      placeholder="Write your content here..."
      className={style.content}
      onChange={(e) => this.handleChange(e, 'content')}
     />
     <button onClick={this.onSubmit}>Submit</button>
    </div>
   </div>
  );
 }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
 return {
  create: (data) => dispatch(create(data)),
 };
};

export default withRouter(
 connect(mapStateToProps, mapDispatchToProps)(CreateBlogPage)
);
