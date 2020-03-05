import { getObjByPath } from './utils';
import produce, { Draft } from 'immer';

export class Storage {
    public static data = {};

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
