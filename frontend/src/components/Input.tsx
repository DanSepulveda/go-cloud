import { useField } from 'formik'
import { InputProps } from '../types/types'
import Icon from './Icon'

const Input = (props: InputProps): JSX.Element => {
    const { id, label, type } = props
    const [field, meta] = useField(props)

    return (
        <div className='input-container'>
            <div className='label-container'>
                <label htmlFor={id}>{label}</label>
            </div>
            <div className='input-section'>
                <div>
                    <input id={id} type={type} {...field} />
                    {meta.touched && !meta.error && <Icon color='#1fb2c4' icon='check' />}
                    {meta.touched && meta.error && <Icon color='#d80d68' icon='close' />}
                </div>
                <div className='message'>
                    <span>{meta.touched && meta.error ? `* ${meta.error}` : null}</span>
                </div>
            </div>
        </div>
    )
}

export default Input