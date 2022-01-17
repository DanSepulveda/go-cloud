import { memo } from 'react'
import Card from './Card'
import { getRandom } from '../lib/getInfo'

// Information for this component is setted when dashboard page loads and it shouldn't change
// That why meme is used. To prevent re render component when user navigate the table

const CardContainer = memo(({ calls }: any): JSX.Element => {
    const random = Math.ceil(Math.random() * 10)
    return (
        <div className='cards-container'>
            <Card color='rgb(71, 124, 241)' icon='downarrow' title='Transferidas' number={getRandom(random)} />
            <Card color='rgb(0, 197, 201)' icon='dialog' title='Iniciadas' number={calls.length} />
            <Card color='rgb(143, 83, 235)' icon='check' title='Discadas' number={calls.length} />
            <Card color='rgb(255, 162, 5)' icon='waiting' title='No iniciadas' number={getRandom(random)} />
            <Card color='rgb(4, 153, 218)' icon='phone' title='Números' number={calls.length} />
            <Card color='rgb(204, 22, 53)' icon='close' title='Fallidas' number={getRandom(random)} />
            <Card color='rgb(244, 14, 123)' icon='time' title='Compromiso Pago' number={getRandom(random)} />
        </div>
    )
})

export default CardContainer