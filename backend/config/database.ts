import AWS from 'aws-sdk'

AWS.config.update({ region: 'REGION' });

var ddbClient = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

export { ddbClient }