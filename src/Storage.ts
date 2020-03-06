import { getObjByPath } from './utils';
import produce from 'immer';

export class Storage {
    public static data = {};

    static createClass(key: string) {
        if (!(key in this.data)) {
            this.change((draft) => {
                draft[key] = {
                    database: null,
                    table: null,
                    columns: [],
                    relation: null,
                    relations: [],
                }
            });
        }
    }

    static get(path: string) {
        return getObjByPath(this.data, path);
    }

    static set(data: any) {
        this.data = data;
    }

    static change(draft: (draft: {}) => void) {
        this.set(produce(this.data, draft));
    }
}
