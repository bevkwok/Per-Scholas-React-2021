import React from 'react'


const Display = (props) => {
    return (
        <div>
            <h4>Display counter component</h4>
            {props.counter}
            <hr />
        </div>
    )
}

export default Display