import { CognitoUserPool } from 'amazon-cognito-identity-js'
import config from './env'
import { PoolData } from '../types'

const poolData: PoolData = {
    UserPoolId: config.AWS_POOL_ID,
    ClientId: config.AWS_CLIENT_ID
}

const userPool = new CognitoUserPool(poolData)

export default userPool