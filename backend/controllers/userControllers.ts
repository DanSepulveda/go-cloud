import { CognitoUser, AuthenticationDetails, CognitoUserAttribute } from 'amazon-cognito-identity-js'
import userPool from '../config/congnitoUserPool'
import { Request, Response } from 'express'
import { AuthData, DataName } from '../types'

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
            const registeredUser = result?.user;
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
            console.log(result)
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

        const authenticationDetails = new AuthenticationDetails(authData);

        unloggedUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                var accessToken = result.getAccessToken().getJwtToken();
                console.log(accessToken)

                //POTENTIAL: Region needs to be set if not already set previously elsewhere.
                // AWS.config.region = '<region>';

                // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                //     IdentityPoolId: '...', // your identity pool id here
                //     Logins: {
                //         // Change the key below according to the specific region your user pool is in.
                //         'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result
                //             .getIdToken()
                //             .getJwtToken(),
                //     },
                // });

                //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
                // AWS.config.credentials.refresh(error => {
                //     if (error) {
                //         console.error(error);
                //     } else {
                //         // Instantiate aws sdk service objects now that the credentials have been updated.
                //         // example: var s3 = new AWS.S3();
                //         console.log('Successfully logged!');
                //     }
                // });
            },
            onFailure: function (error) {
                res.json({ success: false, error: error.message || JSON.stringify(error) })
            },
        })
    },
}

module.exports = userControllers