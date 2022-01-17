import { ReactComponent as Logo } from '../assets/gc-icon_logo.svg'
import { ReactComponent as Person } from '../assets/gc-icon_logout.svg'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const Header = (): JSX.Element => {
    const { logout } = useContext(UserContext)

    return (
        <header>
            <section>
                <Logo fill='white' />
                <Person onClick={logout} />
            </section>
            <section>
                <span>omni</span>
            </section>
        </header>
    )
}

export default Header