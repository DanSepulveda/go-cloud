import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

interface ENV {
    AWS_POOL_ID: string | undefined,
    AWS_CLIENT_ID: string | undefined,
    AWS_PROVIDER: string | undefined,
    AWS_IDENTITY_POOL_ID: string | undefined
}

interface Config {
    AWS_POOL_ID: string,
    AWS_CLIENT_ID: string,
    AWS_PROVIDER: string,
    AWS_IDENTITY_POOL_ID: string
}

const getConfig = (): ENV => {
    return {
        AWS_POOL_ID: process.env.AWS_POOL_ID,
        AWS_CLIENT_ID: process.env.AWS_CLIENT_ID,
        AWS_PROVIDER: process.env.AWS_PROVIDER,
        AWS_IDENTITY_POOL_ID: process.env.AWS_IDENTITY_POOL_ID
    }
}


const getSanitzedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`)
        }
    }
    return config as Config
}

const config = getConfig()

const sanitizedConfig = getSanitzedConfig(config)

export default sanitizedConfig