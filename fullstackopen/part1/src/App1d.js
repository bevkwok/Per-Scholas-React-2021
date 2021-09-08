import { text } from 'body-parser'
import React, { useState } from 'react'
import Button from './Button'

const App1d = () => {

    // -- initial
    const [left, setLeft] = useState(0)  
    const [right, setRight] = useState(0)

    // only one piece of state
    const [clicks, setClicks ] = useState({
        left: 0,
        right: 0
    })

    // -- handling arrays
    // allClicks are initialized as an empty array
    const [allClicks, setAll] = useState([])

    // event handlers need to change the entire state
    const handleLeftClick = () => {
        const newClicks = {
            ...clicks,
            left: clicks.left + 1
        }
        setClicks(newClicks)
    }
    // event handlers need to change the entire state
    const handleRightClick = () => {
        const newClicks = {
            ...clicks,
            right: clicks.right + 1
        }
        setClicks(newClicks)
    }

    // function that changes AllClicks array
    const handleAllClickLeft = () => {
        // add L to allClicks array  ** concat returns a new copied array
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }
    // function that changes AllClicks array
    const handleAllClickRight = () => {
        // add R to allClicks array ** concat returns a new copied array
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    // -- Conditional rendering (making a new history component)
    const History = (props) => {
        if (props.allClicks.length === 0) {
            return (
                <div>
                    This app is used by pressing the buttons
                </div>
            )
        }
        return (
            <div>
                button press history: {props.allClicks.join(' ')}
            </div>
        )
    }

    return (
        <div>
            {/* initial */}
            {/* {left}
            <button onClick={() => setLeft(left + 1)}>
                left
            </button>
            <button onClick={() => setRight(right + 1)}>
                right
            </button>
            {right} */}

            <h3>-- EXAMPLE</h3>
            {clicks.left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {clicks.right}
            <hr />

            {/* Third case - handling arrays */}
            <h3>-- EXAMPLE</h3>
            {left}
            <button onClick={handleAllClickLeft}>All click - LEFT</button>
            <button onClick={handleAllClickRight}>All click - RIGHT</button>
            {right}
            {/* joins all the items into a single string */}
            <p>{allClicks.join(' ')}</p>
            <hr />

            {/* Conditional rendering with History component */}
            <h3>-- EXAMPLE</h3>
            <History allClicks={allClicks} />
            <hr />

            {/* Add in the Button Component */}
            <h3>-- EXAMPLE</h3>
            {clicks.left}
            <Button onClick={handleLeftClick} text='left' />
            <Button onClick={handleRightClick} text='right' />
            {clicks.right}
            <hr />

        </div>
    )
}
export default App1d;
