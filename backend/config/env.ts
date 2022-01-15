import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

interface ENV {
    AWS_ACCESS_KEY_ID: string | undefined;
    AWS_SECRET_ACCESS_KEY: string | undefined;
    AWS_POOL_ID: string | undefined;
    AWS_CLIENT_ID: string | undefined
}

interface Config {
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    AWS_POOL_ID: string;
    AWS_CLIENT_ID: string
}

const getConfig = (): ENV => {
    return {
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        AWS_POOL_ID: process.env.AWS_POOL_ID,
        AWS_CLIENT_ID: process.env.AWS_CLIENT_ID
    };
};

const getSanitzedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`);
        }
    }
    return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;