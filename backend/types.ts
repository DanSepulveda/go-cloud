export interface CallProps {
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