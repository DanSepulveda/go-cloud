import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import config from './env'

const ddbClient = new DynamoDBClient({
    credentials: fromCognitoIdentityPool({
        identityPoolId: config.AWS_IDENTITY_POOL_ID,
        logins: {
            [config.AWS_PROVIDER]: 'funciona'
        }
    }),
    region: 'us-east-1',
    endpoint: 'https://dynamodb.us-east-1.amazonaws.com'
})

export default ddbClient 