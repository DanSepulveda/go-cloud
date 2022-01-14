import Section from '../components/Section'

const Login = () => {
    return (
        <Section className='login-section'>
            <div className='form-container'>
                <img src='/assets/gc-logo-default.svg' alt='GoCloud Logo' />
                <div className='image-container'>
                    <img src='/assets/gc-robot.svg' alt='Robot Logo' />
                </div>
                <div className='text-container'>
                    <p>OMNI</p>
                </div>
            </div>
            <div className='triangle'></div>
        </Section>
    )
}

export default Login
