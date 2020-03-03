import 'reflect-metadata';
import * as path from 'path';
import { promises as fs } from 'fs';

export class Application {

    init() {
        (async () => {
            const list = await fs.readdir(path.join(__dirname, './models'));
            list.forEach((m) => {
                require(path.join(__dirname, './models', m));
            });
        })()
    }
}
