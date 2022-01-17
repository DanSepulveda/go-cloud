import { PutItemCommand, GetItemCommand, ScanCommand, DeleteItemCommand } from '@aws-sdk/client-dynamodb'
import { Request, Response } from 'express'
import connectDB from '../config/database'
import { CallProps, CreateParams, GetCallByID } from '../types'
const attr = require('dynamodb-data-types').AttributeValue

const callControllers = {
    createCall: async (req: Request, res: Response) => {
        const token: string = req.headers.authorization || ''
        const ddbClient = connectDB(token)

        const { phoneNumber, date, status, step, status_date } = req.body

        const itemData: CallProps = {
            id: 'dsada',
            phoneNumber: phoneNumber,
            date: date,
            status: status,
            step: step,
            status_date: status_date,
        }

        const params: CreateParams = {
            TableName: 'calls',
            Item: attr.wrap(itemData)
        }
        try {
            console.log('1')
            await ddbClient.send(new PutItemCommand(params))
            console.log('2')
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false })
        }
    },
    getAllCalls: async (req: Request, res: Response) => {
        const token: string = req.headers.authorization || ''
        const ddbClient = connectDB(token)
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
    },
    getCallByID: async (req: Request, res: Response) => {
        const token: string = req.headers.authorization || ''
        const ddbClient = connectDB(token)
        const params: GetCallByID = {
            TableName: 'calls',
            Key: { id: { S: req.params.id } }
        }

        try {
            const data = await ddbClient.send(new GetItemCommand(params))
            if (data.Item) {
                data.Item = attr.unwrap(data.Item)
            }
            res.json({ success: true, response: data })
        } catch (error) {
            res.json({ success: false, error })
        }
    },
    deleteCallById: async (req: Request, res: Response) => {
        const token: string = req.headers.authorization || ''
        const ddbClient = connectDB(token)
        const params: GetCallByID = {
            TableName: 'calls',
            Key: { id: { S: req.params.id } }
        }

        try {
            const data = await ddbClient.send(new DeleteItemCommand(params))
            res.json({ success: true, response: data })
        } catch (error) {
            res.json({ success: false, error })
        }
    }
}

// module.exports = callControllers

export default callControllers