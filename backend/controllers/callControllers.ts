import { Request, Response } from 'express'
const { v4: uuidv4 } = require('uuid');
import { ddbClient } from '../config/database'
import { PutItemCommand, BatchGetItemCommand, ScanCommand } from '@aws-sdk/client-dynamodb'
const attr = require('dynamodb-data-types').AttributeValue;
import { CallProps } from '../types'

const callControllers = {
    createCall: async (req: Request, res: Response) => {
        const { phoneNumber, date, status, step, status_date } = req.body

        const itemData = {
            id: uuidv4(),
            phoneNumber: phoneNumber,
            date: date,
            status: status,
            step: step,
            status_date: status_date,
        }

        const params = {
            TableName: "calls",
            Item: attr.wrap(itemData)
            // Item: {
            //     id: { S: uuidv4() },
            //     phoneNumber: { S: phoneNumber },
            //     date: { S: date },
            //     status: { S: status },
            //     step: { S: step },
            //     status_date: { S: status_date },
            // },
        }
        try {
            await ddbClient.send(new PutItemCommand(params))
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error })
        }
    },
    getCalls: async (req: Request, res: Response) => {
        const params = {
            TableName: 'calls'
        }

        try {
            let data = await ddbClient.send(new ScanCommand(params))
            if (data.Items?.length) {
                data.Items = data.Items.map(obj => attr.unwrap(obj))
            }
            res.json({ success: true, response: data })
        } catch (error) {
            res.json({ success: false, error })
        }
    }
}

module.exports = callControllers