import { ActivityType, Events, Guild } from 'discord.js';
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

        client.user.setActivity(`Moodle`, {
            type: ActivityType.Watching
        })

        logger.success(`[Bot] => ${client.user.username} is online`);

        const guilds = client.guilds.cache.map((guild: Guild) => guild);
        for (const guild of guilds) {
            await guild.channels.fetch();
        }
        
        setInterval(() => {
            rss(client, config.rssUrlAnnonce, config.channelIdAnnonce);
            rss(client, config.rssUrlBin1, config.channelIdBin1);
            rss(client, config.rssUrlBin2, config.channelIdBin2);
            rss(client, config.rssUrlBin3, config.channelIdBin3);
        } , 1000 * 60 * 5);
    }
};
