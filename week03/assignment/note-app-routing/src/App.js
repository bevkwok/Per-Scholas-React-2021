import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/home';
import AddNote from './pages/addNote';
import NotesList from './pages/notesList';

function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/notes">Notes List</Link>
          </li>
          <li>
            <Link to="/add">Add Notes</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/add">
            <AddNote />
          </Route>
          <Route path="/notes">
            <NotesList />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
