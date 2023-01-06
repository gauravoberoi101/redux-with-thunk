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

 class PostList extends Component {
	componentDidMount(){
		this.props.fetchPosts()
	}
  render() {
	console.log('this.props',this.props)
	return (
	  <div>postList</div>
	)
  }
}

const mapStateToProps = ( state ) =>{
	console.log(state)
	return state
}
export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostList)

