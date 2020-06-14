import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import RenderField from '../renderField';
import { withRouter } from 'next/router';
import { maxLength50, minLength8 } from '../../validation/validations';
import style from './header.module.scss';

function Navigation(props) {
 const { handleSubmit, onSubmit } = props;
 return (
  <>
   <div id="navList" className={style.navList}>
    <ul className={style.navItems}>
     <li>Home</li>
     <li>Profile</li>
     <li>About</li>
     <li>Contact</li>
    </ul>
   </div>
   <form
    id="searchForm"
    className={style.searchForm}
    onSubmit={handleSubmit(onSubmit)}
   >
    <div className={`form-group input-group m-0 ${style.formFix}`}>
     <Field
      name="search"
      className="form-control form-control-lg"
      component={RenderField}
      validate={[maxLength50, minLength8]}
      type="text"
      placeholder="Search by title..."
      size="lg"
     />
     <button type="submit" className={`input-group-text ${style.searchBtn}`}>
      <div className="input-group-prepend">
       {' '}
       <i className="fa fa-search"></i>{' '}
      </div>
     </button>
    </div>
   </form>
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
  document.getElementById('searchForm').style.display = 'block';
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

 render() {
  const { handleSubmit } = this.props;
  return (
   <div
    className={`${style.container} d-flex justify-content-between align-items-center pl-4 pr-4 pt-2 pb-2`}
   >
    <div>
     <h3 className="m-0">BLOGAGE</h3>
    </div>
    <Navigation onSubmit={this.onSubmit} handleSubmit={handleSubmit} />
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
