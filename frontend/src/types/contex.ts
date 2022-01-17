export interface UserProps {
    email: string,
    password: string
}


export interface Call {
    phoneNumber: string,
    status_date: string,
    date: string,
    status: string,
    step: string,
    id: string
}

export interface Calls {
    phoneNumber: string,
    status_date: string,
    date: string,
    status: string,
    step: string,
    id: string
    slice: any
}[]

export type calls = {
    phoneNumber: '',
    status_date: '',
    date: '',
    status: '',
    step: '',
    id: ''
}[]

export interface Numbers {
    number: string
}[]