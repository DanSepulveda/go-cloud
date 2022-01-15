export interface CallProps {
    id: string,
    phoneNumber: string,
    date: string,
    status: string,
    step: string,
    status_date: string
}

export interface CreateParams {
    TableName: string,
    Item: {
        id: { S: string },
        phoneNumber: { S: string },
        date: { S: string },
        status: { S: string },
        step: { S: string },
        status_date: { S: string }
    }
}