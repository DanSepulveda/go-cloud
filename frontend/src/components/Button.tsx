import { ButtonProps } from "../types/types"

const Button = (props: ButtonProps): JSX.Element => {
    return (
        <button type={props.type} id={props.id} className='button' >
            {props.children}
        </button>
    )
}

export default Button