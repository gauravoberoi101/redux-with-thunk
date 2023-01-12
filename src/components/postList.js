//import React from 'react'
//import { connect } from 'react-redux';
//import {fetchPosts} from '../actions';

//function PostList(props) {
//	console.log(props)
//  return (
//	<div>postList</div>
//  )
//}

//const mapStateToProps = (state) =>{
//	console.log(`state: ${state}`)
//	return state
//}

//export default connect(mapStateToProps, {fetchPosts})(PostList)


import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPosts} from '../actions';
import UserHeader from './userHeader';

 class PostList extends Component {
	
	componentDidMount(){
		this.props.fetchPosts()
	}
  render() {
console.log(this.props)
	return (
	  <div>{this.props.posts.length !==0 ? this.props.posts.map(result=>{
		return (<div key={result.id}><p > {result.id}) {result.title}</p>
				<button>Check author details {result.userId}</button>
			
				<UserHeader userId={result.userId}/>
				<hr/>
				</div> )
		
	  }) : ""}</div>
	)
  }
}

const mapStateToProps = ( state ) =>{

	return {posts: state.posts}
}
export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostList)

