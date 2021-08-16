import React, { Component } from 'react';
import "./posts.css"
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchPosts } from "../../store/actions/postAction"

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render() {
    const postsItems = this.props.posts.map(post => (
      <div key={post.id} className="postItems">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div className="posts">
        <h1>Posts</h1>
        {postsItems}

      </div>
    )
  }
}
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};
const mstp = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mstp, { fetchPosts })(Posts)