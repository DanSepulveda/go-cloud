import { ReactComponent as Logo } from '../assets/gc-icon_logo.svg'
import { ReactComponent as Person } from '../assets/gc-icon_logout.svg'

const Header = (): JSX.Element => {
    return (
        <header>
            <section>
                <Logo fill='white' />
                <Person />
            </section>
            <section>
                <span>omni</span>
            </section>
        </header>
    )
}

export default Header