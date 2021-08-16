import { FETCH_POSTS, NEW_POSTS } from "./types";
import axios from 'axios'


export const fetchPosts = () => dispatch => {
  console.log("fetching")
  axios("https://jsonplaceholder.typicode.com/posts/")
    // .then(res => console.log("fetch: ", res.data))
    .then(res => dispatch({
      type: FETCH_POSTS,
      payload: res.data,
    }))
    .catch(err => console.log(err))
};

export const createPost = (postData) => dispatch => {
  console.log("creating post")
  axios.post("https://jsonplaceholder.typicode.com/posts/", postData)
    .then(post =>
      dispatch({
        type: NEW_POSTS,
        payload: post.data
      }))
    .catch(function (error) {
      console.log(error);
    })

};