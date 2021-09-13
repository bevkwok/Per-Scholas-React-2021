import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from 'axios'


const promise = axios.get('http://localhost:3001/notes')
console.log(promise); // resolved

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2); // rejected

// How to access result of promise
// need to register an event handler to the promise by using method then()

promise.then(response => {
  console.log(response)
  // this response contains essential data includs the date, status code and headers.
})

// Common to put then() after axios.get()
axios.get('http://localhost:3001/notes').then(response => {
  // now the data is stored in variable notes
  const notes = response.data
  console.log(notes)
})

// rearrange the code so it's more readable
axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
