import React from 'react'
import App1c from './App1c';
import Hello from './Hello'

export default function Part1c() {

    let counter = 1

    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h1>Part 1C - Greetings</h1>
            <p>
                <App1c counter={counter}/>
                <Hello name="Maya" age={26 + 10} />
                <Hello name={name} age={age} />
            </p>
        </div>
    )
}
