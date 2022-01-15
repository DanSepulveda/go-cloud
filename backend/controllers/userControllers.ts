import { Request, Response } from 'express'
import userPool from '../config/congnitoUserPool'
import { CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoUserAttribute } from "amazon-cognito-identity-js"

const userControllers = {
    signup: async (req: Request, res: Response) => {
        const { username, email, password } = req.body

        let attributeList = []
        const dataName = {
            Name: 'name',
            Value: username
        }
        const attributeName = new CognitoUserAttribute(dataName)
        attributeList.push(attributeName)

        userPool.signUp(email, password, attributeList, [], function (error, result) {
            if (error) {
                res.json({ success: false, error: error.message })
                return;
            }
            var cognitoUser = result?.user;
            console.log('user name is ' + cognitoUser?.getUsername());
        });
    }
}

module.exports = userControllers