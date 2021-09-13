import React from 'react';
import { useLocalStorage } from './useLocalStorage';


// https://www.youtube.com/watch?v=DZpOZt8ru-0

const App:React.FC = () => {
  const [state, setState] = useLocalStorage('test', 1000);
  return (
    <div>
      <p>App</p>
      <p>Value: {state}</p>
      <button onClick={() => setState(Math.floor(Math.random()*10000))
      }>Change State</button>
    </div>
  );
}

export default App;
