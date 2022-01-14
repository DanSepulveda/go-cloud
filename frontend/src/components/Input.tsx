import { useField } from 'formik'
import { InputProps } from '../types/types'

const Input = (props: InputProps) => {
    const { id, label, type } = props
    const [field, meta] = useField(props)

    return (
        <div className='input-container'>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} {...field} />
            <div><span>{meta.touched && meta.error ? `* ${meta.error}` : null}</span></div>
        </div>
    )
}

export default Input