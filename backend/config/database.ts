import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import config from './env'

const ddbClient = new DynamoDBClient({
    credentials: {
        accessKeyId: config.AWS_ACCESS_KEY_ID,
        secretAccessKey: config.AWS_SECRET_ACCESS_KEY
    },
    region: 'us-east-1',
    endpoint: 'https://dynamodb.us-east-1.amazonaws.com'
})

export { ddbClient }