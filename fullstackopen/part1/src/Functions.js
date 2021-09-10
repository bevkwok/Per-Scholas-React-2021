// https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps
import React, { useState } from 'react'

const Functions = () => {
    const [value, setValue] = useState(10)

    // a function that returns a function
    // but what is the point of this???
    const hello = () => {
        const handler = () => console.log('Hello World');
        return handler
    }

    // reason for function that return another function
    const helloName = (name) => {
        const handler = () => {
            console.log('Hello', name);
        }
        return handler
    }
    // equals to
    const helloName1 = (name) => {
        return () => {
            console.log('hello', name)
        }
    }
    // equals to
    const helloName2 = (name) => () => {
        console.log('hello', name)
    }

    // one more example
    const setToValue = (newValue) => () => {
        setValue(newValue)
    }

    // different way to set value
        const setToValue2 = (newValue) => { setValue(newValue) }


    return (
        <div>
            {value}
            {/* EX.1 */}
            <button onClick={hello()}>button</button>
            {/* EX.2 = EX.2 */}
            <button onClick={() => console.log('Hello World')}>button</button>
            {/* EX.3 - reason for function that returns a function */}
            <button onClick={helloName('world')}>hello world button</button>
            <button onClick={helloName('bev')}>hello bev button</button>
            <button onClick={helloName('react')}>hello react button</button>
            <button onClick={setToValue(1000)}>set value to 1000 button</button>
            <button onClick={setToValue(10)}>set value to 10 button</button>
            <button onClick={setToValue(value + 1)}>add 1 to value button</button>
            <button onClick={() => setToValue2(1000)}>set value to 1000 button 2</button>
            <button onClick={() => setToValue2(10)}>set value to 10 button 2</button>
            <button onClick={() => setToValue2(value + 1)}>add 1 to value button 2</button>
        </div>
    )
}

export default Functions