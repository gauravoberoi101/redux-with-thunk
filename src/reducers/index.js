import {combineReducers} from 'redux'

const data1 = () =>{
	return 'abcdfgh'
}
const fetchPost = (post=null, action) =>{
	
	if(action.type==="FETCH_POSTS"){
		console.log("Hii",action)
		return action.payload
	}
		return post
}

export default combineReducers({
	data1: data1,
	fetchPost: fetchPost
})