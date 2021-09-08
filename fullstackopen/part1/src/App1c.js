import React, { useState } from 'react'
import Display from './Display';
import Button from './Button';


    // Page re-rendering
    
    const App1c = () => {

        // const {counter} = props

        // this function call adds state to the component
        // renders it initialized with the value of zero 
        // counter = initial value of state which is 0
        // setCounter = function that modify the state
        const [ counter, setCounter ] = useState(0);

        // setTimeout(
        //     () => setCounter(counter + 1),
        //     2000
        // )

        // EVENT HANDLING EX1
        // const handleClick = () => {
        //     console.log('clicked');
        // }

        // Another way to do it
        const increaseByone = () => setCounter(counter + 1)
        const setToZero = () => setCounter(0)
        const decreaseByone = () => setCounter(counter - 1)

        
        return (
            <div>
                <div>Counter = {counter}</div>
                {/* EVENT HANDLING EX1*/}
                {/* <button onClick={handleClick}>
                    Plus
                </button> */}

                {/* EVENT HANDLING EX2*/}
                {/* <button onClick={() => console.log('clicked')}>plus</button> */}

                {/* EVENT HANDLING EX3*/}
                <button onClick={() => setCounter(counter + 1)}>plus</button>

                {/* Resetting counter */}
                <button onClick={() => setCounter(0)}>Counter to Zero</button>
                <hr />

                {/* this is an error */}
                {/* <button onClick={setCounter(counter + 1)}>Error</button> */}
                {/* the moment the button got render setCounter will be called */}

                {/* Separate the event handlers with functions */}
                <button onClick={increaseByone}>increaseByone function</button>
                <button onClick={setToZero}>setToZero function</button>

                <h3>Breaking down component</h3>
                <h4>display counter, and 2 different buttons</h4>
                <Display counter={counter} />
                <Button onClick={increaseByone} text={'increaseByone'}/>
                <Button onClick={setToZero} text={'setToZero'}/>
                <Button onClick={decreaseByone} text={'decreaseByone'}/>


            </div>
        )
    }

export default App1c;