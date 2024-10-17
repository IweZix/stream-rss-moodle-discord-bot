import { Client, Collection } from 'discord.js';

import { config } from '@/config';
import { ICustomClient } from '@/base/interfaces/ICustomClient';
import { ICommand } from '@/base/interfaces/ICommand';
import { loadEvents } from '@/loaders/loadEvents';

export class CustomClient extends Client implements ICustomClient {
    commands: Collection<string, ICommand>;

    constructor(options: ConstructorParameters<typeof Client>[0]) {
        super(options);
        this.commands = new Collection();
    }

    async start() {
        loadEvents(this);

        await this.login(config.token);
    }
}
