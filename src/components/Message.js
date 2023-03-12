import React from 'react'

export default function Message({message}) {
    return (
        <div className="message">
            <h1>{message} </h1>
        </div>
    )
}