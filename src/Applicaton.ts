import * as path from 'path';
import { promises as fs } from 'fs';
import { Storage } from './Storage';

export class Application {
    async init() {
        const list = await fs.readdir(path.join(__dirname, './models_test'));
        list.forEach((m) => {
            require(path.join(__dirname, './models_test', m))
        });
    }
}
