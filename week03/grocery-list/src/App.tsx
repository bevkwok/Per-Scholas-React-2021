import React, { useState } from 'react';
import './App.css';
import GroceryList from './GroceryList';
import AddGrocery from './AddGrocery';

// https://www.youtube.com/watch?v=jrKcJxF0lAU

export interface IState {
  // each object inside groceryList needs to meet
  groceryList: {
    name: string
    category?: string
  }[]
}



function App() {

  // groceryList is an array of objects
  // passing this into GroceryList component to render
  const [groceryList, setGroceryList] = useState<IState['groceryList']>([
    // {
    //   name: 'apple',
    //   category: 'fruit',
    // },
    // {
    //   name: 'chicken',
    //   category: 'meat',
    // }
  ]);

  // const [ totalGrocery, setTotalGrocery ] = useState(0);

  const [ categoryList, setCategoryList ] = useState<string[]>([
    'Meat',
    'Frult',
    'Beverages',
    'Dairy',
    'Cleaners',
    'Other'
  ]);

  return (
    <div>
      <h1>This is Beverly's Grocery List</h1>
      <GroceryList groceryList={groceryList} />
      <AddGrocery categoryList={categoryList} groceryList={groceryList} setGroceryList={setGroceryList}/>
    </div>
  );
}

export default App;
