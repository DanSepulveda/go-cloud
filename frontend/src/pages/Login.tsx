import Section from '../components/Section'
import LoginForm from '../components/LoginForm'

const Login = (): JSX.Element => {
    return (
        <Section className='login-section'>
            <div className='form-container'>
                <img src='/assets/gc-logo-default.svg' alt='GoCloud Logo' />
                <img src='/assets/gc-robot.svg' alt='Robot Logo' className='avatar' />
                <LoginForm />
                <div className='text-container'>
                    <p>OMNI</p>
                </div>
            </div>
            <div className='triangle'></div>
        </Section>
    )
}

export default Login