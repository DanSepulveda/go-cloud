import { CognitoUser, AuthenticationDetails, CognitoUserAttribute } from 'amazon-cognito-identity-js'
import userPool from '../config/congnitoUserPool'
import { Request, Response } from 'express'
import { AuthData, DataName } from '../types'
import connectDB from '../config/database'

const userControllers = {
    signup: async (req: Request, res: Response) => {
        const { username, email, password } = req.body

        let attributeList = []
        const dataName: DataName = {
            Name: 'name',
            Value: username
        }
        const attributeName = new CognitoUserAttribute(dataName)
        attributeList.push(attributeName)

        userPool.signUp(email, password, attributeList, [], function (error, result) {
            if (error) {
                res.json({ success: false, error: error.message || JSON.stringify(error) })
                return
            }
            const registeredUser = result?.user
            res.json({ success: true, response: `${registeredUser?.getUsername()} registered successfully` })
        })
    },
    confirmRegistration: async (req: Request, res: Response) => {
        const { email, code } = req.body

        const unconfirmedUser = new CognitoUser({
            Username: email,
            Pool: userPool,
        })

        unconfirmedUser.confirmRegistration(code, true, function (error, result) {
            if (error) {
                res.json({ success: false, erorr: error.message || JSON.stringify(error) })
                return
            }
            res.json({ success: true, message: 'Successful verification. Now you can login using your credentials.' })
        })
    },
    login: async (req: Request, res: Response) => {
        const { email, password } = req.body

        const unloggedUser = new CognitoUser({
            Username: email,
            Pool: userPool,
        })

        const authData: AuthData = {
            Username: email,
            Password: password,
        }

        const authenticationDetails = new AuthenticationDetails(authData)

        unloggedUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                const token = result.getIdToken().getJwtToken()
                const name = result.getIdToken().payload.name
                res.json({ success: true, response: { token, name } })
            },
            onFailure: function (error) {
                res.json({ success: false, error: error.message || JSON.stringify(error) })
            },
        })
    }
}

module.exports = userControllers