import { MetadataInspector } from '@loopback/metadata';
import * as path from 'path';
import { promises as fs } from 'fs';
import { data } from './Storage';

export class Application {

    async init() {
        const list = await fs.readdir(path.join(__dirname, './models'));
        list.forEach((m) => {
            const classImport = require(path.join(__dirname, './models', m));
            const classRef = classImport[Object.keys(classImport)[0]];
            new classRef();
            const propertiesMetadata = MetadataInspector.getAllPropertyMetadata(
                'meta-relations',
                classRef.prototype
            )

            for (const pm in propertiesMetadata) {
                const design = MetadataInspector.getDesignTypeForProperty(
                    classRef.prototype,
                    pm
                )
                console.log(classRef.name, design);
            }

            data[classRef.name] = { ...data[classRef.name], ...{ relations: { ...propertiesMetadata }} };
        });
    }
}
