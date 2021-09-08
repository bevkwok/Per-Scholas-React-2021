import React from 'react'

const Hello = ({ name, age }) => {

    // destructuring
    // const { name, age } = props
    
    // component helper function
    const bornYear = () => new Date().getFullYear() - age;

    return (
        <div>
            {/* before destructuring */}
            {/* <p>Hello {props.name}, you are {props.age} years old</p> */}

            {/* after destructuring */}
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

export default Hello

