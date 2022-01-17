import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import Button from './Button'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
import { UserProps } from '../types/contex'
import { message } from '../lib/alert'

const LoginForm = (): JSX.Element => {
    const navigate = useNavigate()
    const { login } = useContext(UserContext)

    const handleSubmit = async (credentials: UserProps) => {
        try {
            const response = await login(credentials)
            console.log(response)
            if (response.success) {
                navigate('/')
                return
            } else {
                throw new Error()
            }
        } catch (error: any) {
            message('Credenciales incorrectas')
        }
    }

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Formato de correo inválido')
                    .required('Campo obligatorio'),
                password: Yup.string()
                    .min(8, 'Contraseña demasiado corta')
                    .required('Campo obligatorio')
            })}
            onSubmit={async (values, { resetForm }) => {
                handleSubmit(values)
            }}
        >
            <Form className='form-container'>
                <Input
                    name="email"
                    id="email"
                    label='Correo electrónico'
                    type='email'
                />
                <Input
                    name="password"
                    id="password"
                    label='Contraseña'
                    type='password'
                />
                <Button type="submit" id='send'>Ingresar</Button>
            </Form>
        </Formik>
    )
}

export default LoginForm