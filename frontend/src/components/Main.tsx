import { MainProps } from "../types/types"

const Main = (props: MainProps) => {
    return (
        <main>
            {props.children}
        </main>
    )
}

export default Main