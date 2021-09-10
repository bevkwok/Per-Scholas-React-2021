import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Part1c from './part1c'
import Part1d from './Part1d'
import Feedback from './Feedback'
import AnecdotesApp from './AnecdotesApp'




ReactDOM.render(
  <React.StrictMode>
    <App />
    <Part1c />
    <Part1d />
    <Feedback />
    <AnecdotesApp />
  </React.StrictMode>,
  document.getElementById('root')
);

