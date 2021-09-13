import React from 'react'

export default function Title(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.subHeading}</h4>
        </div>
    )
}
