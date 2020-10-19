import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import RenderField from '../renderField';
import { withRouter } from 'next/router';
import { maxLength50, minLength8 } from '../../validation/validations';
import style from './header.module.scss';
import { removeLocalStorage, getLocalStorage } from '../helpers';

function Navigation(props) {
 const {
  handleSubmit,
  onSubmit,
  onClickLogout,
  onClickLogin,
  onClickHome,
  onClickProfile,
 } = props;
 const user = getLocalStorage('user');
 return (
  <>
   <form
    id="searchForm"
    className={style.searchForm}
    onSubmit={handleSubmit(onSubmit)}
   >
    <Field
     name="search"
     className="form-control form-control-lg"
     component={RenderField}
     validate={[maxLength50, minLength8]}
     type="text"
     placeholder="Search by title..."
     size="lg"
    />
    <button type="submit" className={`${style.searchBtn}`}>
     Search
    </button>
   </form>
   <div id="navList" className={style.navList}>
    {user ? (
     <ul className={style.navItems}>
      <li onClick={onClickHome}>Home</li>
      <li onClick={() => onClickProfile(user.id)}>Profile</li>
      {/* <li>
      Options
      <span className="pl-2">
       <i className="arrow down"></i>
      </span>
     </li>
     <li>
      Settings
      <span className="pl-2">
       <i className="arrow down"></i>
      </span>
     </li> */}
      <li onClick={onClickLogout}>Sign Out</li>
     </ul>
    ) : (
     <ul className={style.navItems}>
      <li onClick={onClickLogin}>SignIn</li>
     </ul>
    )}
   </div>
  </>
 );
}

class Header extends React.PureComponent {
 constructor(props) {
  super(props);
 }

 onSubmit = () => {
  console.log('submit');
 };

 showMobileMenu = () => {
  document.getElementById('searchForm').style.display = 'flex';
  document.getElementById('navList').style.display = 'block';
  document.getElementById('menuOpen').style.display = 'none';
  document.getElementById('menuClose').style.display = 'block';
 };

 hideMobileMenu = () => {
  document.getElementById('searchForm').style.display = 'none';
  document.getElementById('navList').style.display = 'none';
  document.getElementById('menuClose').style.display = 'none';
  document.getElementById('menuOpen').style.display = 'block';
 };

 onClickLogout = () => {
  removeLocalStorage('user');
  window.location.replace('/');
 };

 onClickLogin = () => {
  const { router } = this.props;
  router.push('/login');
 };

 onClickHome = () => {
  const { router } = this.props;
  router.push('/');
 };

 onClickProfile = (id) => {
  const { router } = this.props;
  router.push(`/profile/${id}`);
 };

 render() {
  const { handleSubmit } = this.props;
  return (
   <div className={style.parentContainer}>
    <div
     className={`${style.container} d-flex justify-content-between align-items-center pl-4 pr-4 pt-2 pb-2`}
    >
     <button className="border-0 bg-transparent" onClick={this.onClickHome}>
      <h3 className="m-0">BLOG!T</h3>
     </button>
     <Navigation
      onClickLogout={this.onClickLogout}
      onSubmit={this.onSubmit}
      handleSubmit={handleSubmit}
      onClickLogin={this.onClickLogin}
      onClickHome={this.onClickHome}
      onClickProfile={this.onClickProfile}
     />
     <div className={style.menuBtn} id="menuOpen" onClick={this.showMobileMenu}>
      <div className={style.menuIcon} />
      <div className={style.menuIcon} />
      <div className={style.menuIcon} />
     </div>
     <div
      className={style.menuClose}
      id="menuClose"
      onClick={this.hideMobileMenu}
     >
      X
     </div>
    </div>
   </div>
  );
 }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
 return {};
};

export default withRouter(
 reduxForm({
  form: 'search',
 })(connect(mapStateToProps, mapDispatchToProps)(Header))
);
