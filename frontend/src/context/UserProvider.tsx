import axios from 'axios'
import { useReducer } from 'react'
import userReducer from './userReducer'
import UserContext from './UserContext'
import { UserProps } from '../types/contex'

const UserProvider = ({ children }: any) => {
    const [userState, dispatch] = useReducer(userReducer, { name: null, token: null })
    const HOST = 'https://go-cloud-dansep.herokuapp.com/api'

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

    const getAllCalls = async (token: string) => {
        try {
            const response = await axios.get(`${HOST}/calls`, {
                headers: {
                    Authorization: token
                }
            })
            if (response.data.success) {
                return response.data
            }
            throw new Error()
        } catch (error: any) {
            return error.message
        }
    }

    return (
        <UserContext.Provider value={{
            login,
            logout,
            userState,
            getAllCalls
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider