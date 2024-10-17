import { Events } from 'discord.js';
import rss from '@/rss/rss';
import FastLogging from 'fastlogging';
import { config } from '@/config';

const logger = new FastLogging(true, true);

/**
 * Launches when the bot is ready
 */
module.exports = {
    name: Events.ClientReady,

    /**
     * Run the event
     * @param {Client} client The client
     */
    async run(client: any) {

        logger.success(`[Bot] => ${client.user.username} is online`);

        setInterval(() => {
            rss(client, config.rssUrlAnnonce, config.channelIdAnnonce);
            rss(client, config.rssUrlBin1, config.channelIdBin1);
            rss(client, config.rssUrlBin2, config.channelIdBin2);
            rss(client, config.rssUrlBin3, config.channelIdBin3);
        } , 1000 * 60 * 5);
    }
};
