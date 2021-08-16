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
}