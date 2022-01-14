import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from './Input'
import Button from './Button'

const LoginForm = (): JSX.Element => {
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
            }}
        >
            <Form>
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