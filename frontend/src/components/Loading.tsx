import Main from './Main'
import Section from './Section'

const Loading = () => {
    return (
        <Main>
            <Section className='loader'>
                <img src='/assets/robot-loader.gif' alt="" />
                <h2>Cargando información...</h2>
            </Section>
        </Main>
    )
}

export default Loading
