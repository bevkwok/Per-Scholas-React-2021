import React, { useState } from 'react';
import { IState as Props } from './App';

interface IProps {
    groceryList: Props["groceryList"]
    setGroceryList: React.Dispatch<React.SetStateAction<Props["groceryList"]>>
    categoryList: string[]
}

const AddGrocery: React.FC<IProps> = ({ categoryList, groceryList, setGroceryList }: any ) => {
    
    const [input, setInput] = useState({
        name: '',
        category: '',
        // bought: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })


    }

    const handleClick = (): void => {
        if (!input.name) {
            return
        } else {
            console.log('input.category == ', input.category)
            setGroceryList([
                ...groceryList, 
                {
                    name: input.name,
                    category: input.category
                    // bought: input.bought
                }])

                setInput({
                    name: '',
                    category: ''
                    // bought: false
                })
        }
        console.log('AFTER groceryList', groceryList);
        console.log('AFTER input.category == ', input.category)


    }

    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder="Name" name="name" value={input.name} onChange={handleChange}></input>
            <div>
            <label htmlFor="category">Category: </label>
                <select name="category" id="category" value={input.category} onChange={handleChange}>
                    {
                        categoryList.map((category: string) => {
                            return (
                                <option value={category}>{category}</option>
                                )
                            })
                        }
                </select>
            </div>
            {/* <div>
                <label htmlFor="bought">Bought : </label>
                <input type="checkbox" id="bought" name="bought" checked={input.bought} value={false} onChange={handleChange}/>
            </div> */}
            <button onClick={handleClick}>Add Grocery</button>
        </div>
    )
}

export default AddGrocery