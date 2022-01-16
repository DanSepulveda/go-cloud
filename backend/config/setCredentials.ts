import { Request, Response } from 'express'
import config from './env'

const setCredentials = (req: Request, res: Response, next: any) => {
    const token = req.headers['authorization']

    // console.log(config.AWS_IDENTITY_POOL_ID)
    // console.log(config.AWS_PROVIDER)

    // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    //     IdentityPoolId: 'us-east-1:2e68a01b-ad44-4714-a806-5d4adf7627bc',
    //     Logins: {
    //         'cognito-idp.us-east-1.amazonaws.com/us-east-1_28qP4WJzA': token || ''
    //     }
    // })

    console.log('paso por acp')

    next()
}

export default setCredentials