import React from 'react'

export default function Container(props:any) {
    return (
        <div className={`w-full flex max-w-7xl ${props.className}`}>
            {props.children}
        </div>
    )
}
