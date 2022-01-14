import React from 'react'

interface Props {
    children: React.ReactNode,
}

const Main = (props: Props) => {
    return (
        <main>
            {props.children}
        </main>
    )
}

export default Main