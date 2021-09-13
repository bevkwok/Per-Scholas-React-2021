import React from 'react'
import { IState as IProps } from './App'


// saying that GroceryList is a functional component that will return an array of object
const GroceryList: React.FC<IProps> = ( { groceryList } ) => {
    return (
        <ul>
            {
                groceryList.map((grocery) => {
                    return (
                    <li>
                        <p>Name: {grocery.name}</p>
                        {console.log('trying to print', grocery)}
                        {console.log('trying to print', grocery.category)}
                        <p>Category: {grocery.category}</p>
                    </li>
                    )
                })
            }
        </ul>
    )
}
export default GroceryList