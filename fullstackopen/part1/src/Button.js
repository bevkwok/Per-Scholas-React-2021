import React from 'react'

const Button = (props) => {
    console.log(props)
    const { onClick, text } = props
    return(
        // Event Handler is being passed to child
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default Button