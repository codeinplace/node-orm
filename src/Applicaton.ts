import * as path from 'path';
import { promises as fs } from 'fs';

export class Application {

    init() {
        (async () => {
            // glob
            const list = await fs.readdir(path.join(__dirname, './models'));
            const imports = [];
            list.forEach((m) => {
                imports.push(require(path.join(__dirname, './models', m)));
            });
            console.log(imports);
        })()
    }
}
