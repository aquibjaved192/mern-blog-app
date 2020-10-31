import axios from 'axios';

// Action Types
const GET_SEARCH = 'GET_BLOG';

// Action dispatchers

export const search = (key) => {
 const url = `http://localhost:5000/search/${key}`;
 return (dispatch) => {
  return axios({
   url,
   headers: {
    'Content-Type': 'application/json',
   },
   method: 'get',
   responseType: 'json',
  })
   .then((res) => {
    if (res.status === 200) {
     dispatch({ type: GET_SEARCH, payload: res.data.data });
    } else {
     //dispatch({ type: SIGN_UP, payload: res.data });
    }
   })
   .catch((err) => console.log(err));
 };
};

const initialState = {
 data: [],
};

// Reducer

const getSearchReducer = (state = initialState, action) => {
 switch (action.type) {
  case GET_SEARCH:
   return { ...state, data: action.payload };
  default:
   return { ...state };
 }
};

export default getSearchReducer;
