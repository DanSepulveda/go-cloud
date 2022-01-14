import Header from '../components/Header'
import Main from '../components/Main'
import Section from '../components/Section'
import CardContainer from '../components/CardContainer'
import Table from '../components/Table'

const Dashboard = (): JSX.Element => {
    return (
        <>
            <Header />
            <Main>
                <Section className='info-container'>
                    <h1>Detalle de campaña</h1>
                    <div className='resume'>
                        <p>Nombre de la campaña</p>
                        <div>
                            <p>Progreso discado: <span>73%</span></p>
                            <p>Consumo total: <span>02:07 min</span></p>
                            <p>Duración promedio llamada: <span>24seg</span></p>
                        </div>
                    </div>
                    <CardContainer />
                    <Table />
                </Section>
            </Main>
        </>
    )
}

export default Dashboard