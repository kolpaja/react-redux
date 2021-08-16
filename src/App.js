import React from 'react'
import './App.css';
import Basic from './components/Forms/Basic';
import PostForm from './components/Posts/PostForm';
import Posts from './components/Posts/Posts';

//apply the provider and assigning the store to it
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux crash course</h1>
        {/* <Basic /> */}
        <hr />

        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
