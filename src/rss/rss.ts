import { Client, EmbedBuilder, TextChannel } from 'discord.js';
import { config } from '@/config';
import Parser from 'rss-parser';
import FastLogging from 'fastlogging';

const parser = new Parser();
const logger = new FastLogging(true, true);

/**
 * Fetches the RSS feed and sends a new article to the channel 
 * every 5 minutes
 * @param {Client} client The client
 * @returns {Promise<void>} sends a new article to the channel
 */
async function rss(client: Client): Promise<void> {
    try {
        const channel = client.channels.cache.get(config.channelId) as TextChannel;
        const feed = await parser.parseURL(config.rssUrl);
        const latestItem = feed.items[0];
        const title: string = latestItem.title ?? 'An article has been posted';
        const link: string = latestItem.link ?? config.defaultUrl;
        const pubDate: string = latestItem.pubDate ?? 'No date available';
        const description: string = latestItem.contentSnippet ?? 'An article has been posted but no description is available.';

        if (!channel) {
            logger.error(`[RSS] => Channel not found`);
            return;
        }

        if (pubDate === 'No date available') {
            logger.error(`[RSS] => No date available`);
            return;
        }

        const pubDateObj = new Date(pubDate);
        const now = new Date();
        
        if (pubDateObj.getTime() < now.getTime() - 300000) {
            logger.log(`[RSS] => No new items`);
            return;
        }
        
        const embed = new EmbedBuilder()
            .setTitle(title)
            .setURL(link)
            .setDescription(description)
            .setFooter({text: pubDate})
            .setColor('#437c98');
    
        channel.send({ embeds: [embed] });

    } catch (error) {
        logger.error(`[RSS] => ${error}`);
    }
}

export default rss;