import { createContext } from 'react'
import { UserProps } from '../types/contex'

interface UserStateProps {
    name: string,
    token: string
}

interface userActions {
    login: (user: UserProps) => Promise<any>,
    logout: () => void,
    userState: UserStateProps,
    getAllCalls: (token: string) => Promise<any>
}

const UserContext = createContext({} as userActions)

export default UserContext