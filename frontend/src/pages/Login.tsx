import Section from '../components/Section'
import LoginForm from '../components/LoginForm'

const Login = (): JSX.Element => {
    return (
        <Section className='login-section'>
            <div className='data-container'>
                <div>
                    <img src='/assets/gc-logo-default.svg' alt='GoCloud Logo' />
                    <img src='/assets/gc-robot.svg' alt='Robot Logo' className='avatar' />
                    <LoginForm />
                </div>
                <div className='text-container'>
                    <p>OMNI<span> 1.0</span></p>
                    <p>Un servicio de <span>GoCloud</span></p>
                </div>
            </div>
            <div className='triangle'></div>
        </Section>
    )
}

export default Login