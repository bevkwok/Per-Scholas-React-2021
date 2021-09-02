import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';


export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://www.google.com/search?q=lebron+james&rlz=1C5CHFA_enUS903US903&sxsrf=AOaemvLjKBvrfhQKGsRe22FNDKehkDs6yg:1630465978312&tbm=isch&source=iu&ictx=1&fir=iBQIDSnefvPWNM%252C3YG9ZA8C5OqKDM%252C_&vet=1&usg=AI4_-kTXrpG282Let1btEDXAVKrZx6aLZQ&sa=X&ved=2ahUKEwiZh9KL59zyAhV9FTQIHZP9Bd8Q_h16BAgJEAE#imgrc=iBQIDSnefvPWNM",
      age: 36,
      note: "Hello LeBron"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to the Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
      <p>https://www.youtube.com/watch?v=jrKcJxF0lAU</p>
    </div>
  );
}

export default App;
