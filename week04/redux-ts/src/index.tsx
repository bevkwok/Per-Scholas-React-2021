//https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import reducer from './store/reducer'

// passing in reducer function as an argument to create a new Redux store
// second parameter = redux-thunk to able to handle asynchronous code
const store: Store<ArticleState, ArticleAction> & { dispatch: DispatchType } = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    {/* connect react to redux by passing store as props */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

