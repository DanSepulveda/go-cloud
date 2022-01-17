import moment from "moment"
moment.locale("es")

export const getFecha = (date: string) => {
    const formatedDate = moment(new Date(parseInt(date) * 1000)).format('DD MMM YYYY')
    return formatedDate
}

export const getTime = (date: string) => {
    const formatedTime = moment(new Date(parseInt(date) * 1000)).format('h:mma')
    return formatedTime
}

export const getDuration = (initial: string, final: string) => {
    const formatedDuration = moment(new Date(parseInt(initial) - parseInt(final))).format('h:mm')
    return formatedDuration
}

export const getStatus = (status: string) => {
    const formatedStatus = status === 'finished' ? 'Finalizada' : 'Hablando'
    return formatedStatus
}

export const getStep = (step: string) => {
    if (step === '0') {
        step = 's0'
    }
    return step
}