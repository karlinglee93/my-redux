import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Main from './components/Main'
import { createStore } from 'redux'
import {Provider } from 'react-redux'
import rootReducer from './reducers/index'

const store = createStore(rootReducer)

class App extends React.Component {
  	
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
