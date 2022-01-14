import { IconProps } from '../types/types'
import { ReactComponent as Check } from '../assets/gc-icon_check.svg'
import { ReactComponent as Close } from '../assets/gc-icon_close.svg'

const Icon = (props: IconProps): JSX.Element => {
    const icons: any = {
        check: <Check />,
        close: <Close />
    }
    return (
        <div className='icon' style={{ backgroundColor: props.color }}>
            {icons[props.icon]}
        </div>
    )
}

export default Icon