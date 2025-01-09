import React from 'react'

export default function Section(props: any) {
    return (
        <section id={props?.id} className={`w-full flex justify-center ${props.className}`}>
            {
                props.children
            }
        </section>
    )
}
