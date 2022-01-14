import { CardProps } from "../types/types"
import { ReactComponent as DownArrow } from '../assets/gc-icon_down-arrow.svg'
import { ReactComponent as Dialog } from '../assets/gc-icon_dialog.svg'
import { ReactComponent as Check } from '../assets/gc-icon_check.svg'
import { ReactComponent as Waiting } from '../assets/gc-icon_waiting.svg'
import { ReactComponent as Phone } from '../assets/gc-icon_phone.svg'
import { ReactComponent as Close } from '../assets/gc-icon_close.svg'
import { ReactComponent as Time } from '../assets/gc-icon_time.svg'

const icons = {
    downarrow: <DownArrow />,
    dialog: <Dialog />,
    check: <Check />,
    waiting: <Waiting />,
    phone: <Phone />,
    close: <Close />,
    time: <Time />
}

const Card = (props: CardProps): JSX.Element => {
    return (
        <div className='card'>
            <span className='number' style={{ color: props.color }}>36</span>
            <span className='title'>{props.title}</span>
            {icons[props.icon]}
            <span></span>
            <div className='bar' style={{ backgroundColor: props.color }}></div>
        </div>
    )
}

export default Card