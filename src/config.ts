import dotenv from 'dotenv';

dotenv.config();

const {
    TOKEN,
    COLOR,
    DEVELOPER_ID,
    VERSION,
    RSS_URL,
    CHANNEL_ID,
    DEFAULT_URL
} = process.env;

if (
    !TOKEN ||
    !COLOR ||
    !DEVELOPER_ID ||
    !VERSION ||
    !RSS_URL ||
    !CHANNEL_ID ||
    !DEFAULT_URL
) {
    throw new Error('Missing environment variables');
}

export const config = {
    token: TOKEN,
    color: COLOR,
    developerId: DEVELOPER_ID,
    version: VERSION,
    rssUrl: RSS_URL,
    channelId: CHANNEL_ID,
    defaultUrl: DEFAULT_URL
};
