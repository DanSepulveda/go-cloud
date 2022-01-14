import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string
}

const Section = (props: Props) => {
    return (
        <section className={props.className}>
            {props.children}
        </section>
    )
}

export default Section