import React from 'react'

export default function Section(props) {
    return (
        <section id={props?.id} className={`w-full flex justify-center px-4 md:px-8 ${props.className}`}>
            {
                props.children
            }
        </section>
    )
}
