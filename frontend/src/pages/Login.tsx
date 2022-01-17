import Section from '../components/Section'
import LoginForm from '../components/LoginForm'
import Main from '../components/Main'
import { useEffect } from 'react'

const Login = (): JSX.Element => {

    useEffect(() => {
        document.title = 'GoCloud | Login'
        // eslint-disable-next-line
    }, [])

    return (
        <Main>
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
        </Main>
    )
}

export default Login