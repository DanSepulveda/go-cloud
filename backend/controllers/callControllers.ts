import { Request, Response } from 'express'
import ddbClient from '../config/database'
import { CallProps, CreateParams, GetCallByID } from '../types'
const attr = require('dynamodb-data-types').AttributeValue
const { v4: uuidv4 } = require('uuid')

const callControllers = {
    createCall: async (req: Request, res: Response) => {
        const { phoneNumber, date, status, step, status_date } = req.body

        const itemData: CallProps = {
            id: uuidv4(),
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

        ddbClient.putItem(params, function (error, data) {
            if (error) {
                res.json({ success: false, error })
            } else {
                res.json({ success: true, response: data })
            }
        })
    },
    getAllCalls: async (req: Request, res: Response) => {
        const params = {
            TableName: 'calls'
        }

        ddbClient.scan(params, function (error, data) {
            if (error) {
                res.json({ success: false, error })
            } else {
                data.Items = data.Items?.map(obj => attr.unwap(obj))
                res.json({ sucess: true, response: data })
            }
        })
    },
    getCallByID: async (req: Request, res: Response) => {
        const params: GetCallByID = {
            TableName: 'calls',
            Key: { id: { S: req.params.id } }
        }

        ddbClient.getItem(params, function (error, data) {
            if (error) {
                res.json({ success: false, error })
            } else {
                res.json({ sucess: true, response: data.Item })
            }
        })
    },
    deleteCallById: async (req: Request, res: Response) => {
        const params: GetCallByID = {
            TableName: 'calls',
            Key: { id: { S: req.params.id } }
        }

        ddbClient.deleteItem(params, function (error, data) {
            if (error) {
                res.json({ success: false, error })
            } else {
                res.json({ success: true, response: data })
            }
        })
    }
}

module.exports = callControllers