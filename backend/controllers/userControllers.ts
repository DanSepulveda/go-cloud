import { Request, Response } from 'express'
import userPool from '../config/congnitoUserPool'
import { CognitoUser, AuthenticationDetails, CognitoUserAttribute } from "amazon-cognito-identity-js"

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
    },
    confirmRegistration: async (req: Request, res: Response) => {
        var { email, code } = req.body

        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: userPool,
        })

        cognitoUser.confirmRegistration(code.toString(), true, function (error, result) {
            if (error) {
                res.json({ success: false, erorr: error.message || JSON.stringify(error) })
                return
            }
            res.json({ success: true })
        })
    },
    login: async (req: Request, res: Response) => {
        const { email, password } = req.body

        const user = new CognitoUser({
            Username: email,
            Pool: userPool,
        })

        const authenticationDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        user.authenticateUser(authenticationDetails, {
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

            onFailure: function (err) {
                console.log(err.message || JSON.stringify(err));
            },
        });
    }
}

module.exports = userControllers