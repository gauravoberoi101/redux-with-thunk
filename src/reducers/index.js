import {combineReducers} from 'redux'


const fetchPost = (state = [], action) => {
	switch (action.type) {
	  case 'FETCH_POSTS':
		return action.payload;
	  default:
		return state;
	}
  };
  

//const fetchEachUser = (state=[], action) =>{
//	if(action.type === "FETCH_USER"){
//		console.log("FETCH_USER")
//		return [...state, action.payload]
//	}
//	return state
//}

const  fetchEachUser = (state = [], action) => {
	switch (action.type) {
	  case 'FETCH_USER':
		return [...state, action.payload];
	  default:
		return state;
	}
  };
  

export default combineReducers({

	posts: fetchPost,
	users: fetchEachUser
})