import axios from 'axios';

export const todosList = async () =>{

	 await axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
		console.log('res',res)
		//return res
	})	
	
}