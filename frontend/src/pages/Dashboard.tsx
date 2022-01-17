import Header from '../components/Header'
import Main from '../components/Main'
import Section from '../components/Section'
import CardContainer from '../components/CardContainer'
import Table from '../components/Table'
import Loading from '../components/Loading'
import { ReactComponent as Arrow } from '../assets/gc-icon_caret.svg'
import { useContext, useState, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { Calls } from '../types/contex'

const Dashboard = (): JSX.Element => {
    const [calls, setCalls] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const { getAllCalls, userState } = useContext(UserContext)

    const getCalls = async (token: string) => {
        try {
            const response = await getAllCalls(token)
            console.log(response.success)
            if (response.success) {
                console.log('entro')
                setCalls(response.response.Items)
                console.log('entro')
                setIsLoading(false)
            } else {
                throw new Error()
            }
        } catch (error) {
            alert('error')
        }
    }

    useEffect(() => {
        getCalls(userState.token)
    }, [])

    if (isLoading) {
        return <Loading />
    }

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
                    <Table calls={calls} />
                    <div className='icons'>
                        <Arrow />
                        <Arrow />
                    </div>
                </Section>
            </Main>
        </>
    )
}

export default Dashboard