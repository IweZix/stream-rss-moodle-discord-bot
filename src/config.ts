import dotenv from 'dotenv';

dotenv.config();

const {
    TOKEN,
    COLOR,
    DEVELOPER_ID,
    VERSION,
    RSS_URL_ANNONCE,
    CHANNEL_ID_ANNONCE,
    RSS_URL_BIN1,
    CHANNEL_ID_BIN1,
    RSS_URL_BIN2,
    CHANNEL_ID_BIN2,
    RSS_URL_BIN3,
    CHANNEL_ID_BIN3,
    DEFAULT_URL
} = process.env;

if (
    !TOKEN ||
    !COLOR ||
    !DEVELOPER_ID ||
    !VERSION ||
    !RSS_URL_ANNONCE ||
    !CHANNEL_ID_ANNONCE ||
    !RSS_URL_BIN1 ||
    !CHANNEL_ID_BIN1 ||
    !RSS_URL_BIN2 ||
    !CHANNEL_ID_BIN2 ||
    !RSS_URL_BIN3 ||
    !CHANNEL_ID_BIN3 ||
    !DEFAULT_URL
) {
    throw new Error('Missing environment variables');
}

export const config = {
    token: TOKEN,
    color: COLOR,
    developerId: DEVELOPER_ID,
    version: VERSION,
    rssUrlAnnonce: RSS_URL_ANNONCE,
    channelIdAnnonce: CHANNEL_ID_ANNONCE,
    rssUrlBin1: RSS_URL_BIN1,
    channelIdBin1: CHANNEL_ID_BIN1,
    rssUrlBin2: RSS_URL_BIN2,
    channelIdBin2: CHANNEL_ID_BIN2,
    rssUrlBin3: RSS_URL_BIN3,
    channelIdBin3: CHANNEL_ID_BIN3,
    defaultUrl: DEFAULT_URL
};
