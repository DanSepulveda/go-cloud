import Header from '../components/Header'
import Main from '../components/Main'
import Section from '../components/Section'
import CardContainer from '../components/CardContainer'
import Table from '../components/Table'
import Loading from '../components/Loading'
import { ReactComponent as Arrow } from '../assets/gc-icon_caret.svg'
import { useContext, useState, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { message } from '../lib/alert'
import { useNavigate } from 'react-router-dom'
import { Calls } from '../types/contex'

const Dashboard = (): JSX.Element => {
    const navigate = useNavigate()
    const [calls, setCalls] = useState<Calls>()
    const [isLoading, setIsLoading] = useState(true)
    const { getAllCalls, userState } = useContext(UserContext)
    const [filteredCalls, setFilteredCalls] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    const getCalls = async (token: string) => {
        // Get calls data and set Maxpage according to items length
        // Every page shows 10 elements at maximum
        try {
            const response = await getAllCalls(token)
            if (response.success) {
                setCalls(response.response.Items)
                setFilteredCalls(response.response.Items.slice(0, 10))
                setMaxPage(Math.ceil(response.response.Items.length / 10))
                setIsLoading(false)
            } else {
                throw new Error()
            }
        } catch (error: any) {
            message('Ocurrió un problema. Intente más tarde')
            navigate('/login')
        }
    }

    useEffect(() => {
        // It fetch calls while user is watching preloader
        getCalls(userState.token)
        document.title = 'GoCloud | Dashboard'
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        // Every time user change table tab it changes calls to show
        setFilteredCalls(calls?.slice((currentPage - 1) * 10, currentPage * 10))
        // eslint-disable-next-line
    }, [currentPage])

    const handlePagination = (direction: string) => {
        // It handles what page is currently watching the user
        if (direction === 'right' && currentPage < maxPage) {
            setCurrentPage(currentPage + 1)
        }
        if (direction === 'left' && currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    if (isLoading) {
        // While fetching calls, the user see an animated preloader. 
        // It change when fetch is successful. If it's not, user is redirected to login page
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
                    <CardContainer calls={calls} />
                    <Table calls={filteredCalls} />
                    <div className='icons'>
                        <Arrow
                            onClick={() => handlePagination('left')}
                            className={currentPage === 1 ? 'inactive' : 'active'}
                        />
                        <Arrow
                            onClick={() => handlePagination('right')}
                            className={currentPage === maxPage ? 'inactive' : 'active'}
                        />
                    </div>
                </Section>
            </Main>
        </>
    )
}

export default Dashboard