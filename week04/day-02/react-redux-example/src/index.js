import React from 'react';
import ReactDOM from 'react-dom';

// import createStore from redux
import { createStore } from 'redux';
// importing helper function Provider from react-redux package
import { Provider } from 'react-redux';

import App from './App';

// import reducer
import reducer from './store/reducer';


// pass reducer in createStore to make the store for this app
const store = createStore(reducer)

// ?? How to connect store to React
// warp App component with Provider pass store in as props

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <h3>Tutorial came from link below</h3>
      <p>https://www.ibrahima-ndaw.com/blog/7-steps-to-understand-react-redux/</p>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

