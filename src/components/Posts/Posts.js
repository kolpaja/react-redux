import React, { Component } from 'react';
import "./posts.css"
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postAction"

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts()
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
const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts)