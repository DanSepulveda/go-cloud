import { Request, Response } from 'express'
import { ddbClient } from '../config/database'
import { PutItemCommand } from '@aws-sdk/client-dynamodb'

const callControllers = {
    createCall: async (req: Request, res: Response) => {
        const params = {
            TableName: "calls",
            Item: {
                id: { N: "002" },
                nombre: { S: "Richard Roe" },
            },
        }

        try {
            const call = await ddbClient.send(new PutItemCommand(params))
            console.log(JSON.stringify(call))
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error })
        }
    }
}

module.exports = callControllers