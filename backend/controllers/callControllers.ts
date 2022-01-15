import { Request, Response } from 'express'
const { v4: uuidv4 } = require('uuid');
import { ddbClient } from '../config/database'
import { PutItemCommand } from '@aws-sdk/client-dynamodb'
import { CallProps } from '../types'

const callControllers = {
    createCall: async (req: Request, res: Response) => {
        const { phoneNumber, date, status, step, status_date } = req.body

        const params: CallProps = {
            TableName: "calls",
            Item: {
                id: { S: uuidv4() },
                phoneNumber: { S: phoneNumber },
                date: { S: date },
                status: { S: status },
                step: { S: step },
                status_date: { S: status_date },
            },
        }
        try {
            await ddbClient.send(new PutItemCommand(params))
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error })
        }
    }
}

module.exports = callControllers