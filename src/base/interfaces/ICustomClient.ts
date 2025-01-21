import { Client } from 'discord.js';

/**
 * Custom client interface
 */
export interface ICustomClient extends Client {

    /**
     * Start the client
     * @returns {Promise<void>}
     */
    start: () => Promise<void>;
}
