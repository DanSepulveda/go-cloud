import axios from 'axios'
import { useReducer } from 'react'
import userReducer from './userReducer'
import UserContext from './UserContext'
import { UserProps } from '../types/contex'

const UserProvider = ({ children }: any) => {
    const [userState, dispatch] = useReducer(userReducer, { name: null, token: null })
    const HOST = 'http://localhost:4000/api'

    const login = async (credentials: UserProps) => {
        try {
            const response = await axios.post(`${HOST}/login`, credentials)
            if (response.data.response) {
                dispatch({ type: "LOGIN", payload: response.data.response })
                return response.data
            }
        } catch (error: any) {
            return error.message
        }
    }

    const logout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <UserContext.Provider value={{
            login,
            logout,
            userState
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider