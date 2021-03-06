import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

// https://www.tutorialspoint.com/how-to-set-cookies-in-reactjs

const App = () => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [cookies, setCookie] = useCookies(['user']);

  const handle = () => {
    setCookie('Name', name, { path: '/' });
    setCookie('Password', pwd, { path: '/' });
    // path '/' meaning the cookie is available for all the pages of this web
  };
  return (
    <div className="App">
    <h1>Name of the user:</h1>
    <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
    <h1>Password of the user:</h1>
    <input
        type="password"
        placeholder="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
    />
    <div>
        <button onClick={handle}>Set Cookie</button>
    </div>
    <br />
    {cookies.Name && (
      <div>
        Name: <p>{cookies.Name}</p>
      </div>
      )}
      {cookies.Password && (
      <div>
        Password: <p>{cookies.Password}</p>
      </div>
      )}
  </div>
  );
};
export default App;