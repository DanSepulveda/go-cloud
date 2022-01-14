import Card from "./Card"

const CardContainer = (): JSX.Element => {
    return (
        <div className='cards-container'>
            <Card color='rgb(71, 124, 241)' icon='downarrow' title='Transferidas' />
            <Card color='rgb(0, 197, 201)' icon='dialog' title='Iniciadas' />
            <Card color='rgb(143, 83, 235)' icon='check' title='Discadas' />
            <Card color='rgb(255, 162, 5)' icon='waiting' title='No iniciadas' />
            <Card color='rgb(4, 153, 218)' icon='phone' title='Números' />
            <Card color='rgb(204, 22, 53)' icon='close' title='Fallidas' />
            <Card color='rgb(244, 14, 123)' icon='time' title='Compromiso Pago' />
        </div>
    )
}

export default CardContainer