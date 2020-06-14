import axios from 'axios';
import Router from 'next/router';

// Action Types
const SIGN_UP = 'SIGN_UP';

// Action dispatchers
export const signUp = (data) => {
 const url = `http://localhost:5000/signup`;
 return (dispatch) => {
  return axios({
   url,
   headers: {
    'Content-Type': 'application/json',
   },
   method: 'post',
   data,
   responseType: 'json',
  })
   .then((res) => {
    if (res.data.status === 200) {
     Router.push('/login');
    } else {
     dispatch({ type: SIGN_UP, payload: res.data });
    }
   })
   .catch((err) => console.log(err));
 };
};

export const logIn = (data) => {
 const url = `http://localhost:5000/login`;
 return (dispatch) => {
  return axios({
   url,
   headers: {
    'Content-Type': 'application/json',
   },
   method: 'post',
   data,
   responseType: 'json',
  })
   .then((res) => {
    if (res.status === 200) {
     dispatch({ type: SIGN_UP, payload: res.data.data });
     Router.push('/home');
    } else {
     dispatch({ type: SIGN_UP, payload: res.data });
    }
   })
   .catch((err) => console.log(err));
 };
};

const initialState = {
 data: {},
};

// Reducer

const signupReducer = (state = initialState, action) => {
 switch (action.type) {
  case SIGN_UP:
   return { ...state, data: action.payload };
  default:
   return { ...state };
 }
};

export default signupReducer;
