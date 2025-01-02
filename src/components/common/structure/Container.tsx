import React from 'react'

export default function Container(props:any) {
    return (
        <div className={`w-full  max-w-7xl flex  justify-self-center ${props.className}`}>
            {props.children}
        </div>
    )
}
