interface ActionProps {
    type: 'LOGIN' | 'LOGOUT',
    payload?: any
}

interface StateProps {
    name: string | null,
    token: string | null
}

const userReducer = (state: StateProps, action: ActionProps) => {
    switch (action.type) {
        case "LOGIN":
            return {
                name: action.payload.name,
                token: action.payload.token
            }
        case "LOGOUT":
            return {
                name: null,
                token: null
            }
        default:
            return state
    }
}

export default userReducer