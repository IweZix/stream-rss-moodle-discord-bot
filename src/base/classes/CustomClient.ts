import { Client } from 'discord.js';

import { config } from '@/config';
import { ICustomClient } from '@/base/interfaces/ICustomClient';
import { loadEvents } from '@/loaders/loadEvents';

export class CustomClient extends Client implements ICustomClient {

    async start() {
        loadEvents(this);

        await this.login(config.token);
    }
}
