import { todosList } from '../api/api';
import axios from 'axios';

export const fetchPosts = () =>{
	
	return async function(dispatch, getState){
		const response = axios.get("https://jsonplaceholder.typicode.com/todos")
		response.then(res=>{
			console.log(res)
			dispatch({
				type: "FETCH_POSTS",
				payload: res.data
			})
		})

	
	
	}
	
}