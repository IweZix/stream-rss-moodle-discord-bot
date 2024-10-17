import { Client, Events } from 'discord.js';
import rss from '@/rss/rss';
import FastLogging from 'fastlogging';

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
            rss(client);
        } , 1000 * 60 * 5);
    }
};
