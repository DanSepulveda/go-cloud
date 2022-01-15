import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import config from './env'

// const accessDB = (idToken: string) => {
//     // const COGNITO_ID = 'cognito-idp.us-east-1.amazonaws.com/us-east-1_28qP4WJzA'

//     const ddbClient = new DynamoDBClient({
//         credentials: fromCognitoIdentityPool({
//             identityPoolId: config.AWS_POOL_ID,
//             clientConfig: { region: 'us-east-1' },
//             logins: {
//                 'cognito-idp.us-east-1.amazonaws.com/us-east-1_28qP4WJzA': idToken
//             }
//         }),
//         region: 'us-east-1',
//         endpoint: 'https://dynamodb.us-east-1.amazonaws.com'
//     })
//     return ddbClient
// }

// export default accessDB

const ddbClient = new DynamoDBClient({
    // credentials: {
    //     accessKeyId: config.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: config.AWS_SECRET_ACCESS_KEY
    // },
    region: 'us-east-1',
    endpoint: 'https://dynamodb.us-east-1.amazonaws.com',
})

export { ddbClient }