import React from 'react'

export default function Note(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.message}</h4>
        </div>
    )
}
