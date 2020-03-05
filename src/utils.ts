export function truthy(value: any[] | {} | string | number): any {
    const type = this.type(value);
    switch (type) {
        case 'array':
            if (Array.isArray(value)) {
                return value.length > 0 ? value : undefined;
            }

        case 'object':
            return !isObjEmpty(value) ? value : undefined;

        default:
            return value ? value : undefined;
    }
}

export function type(value: any) {
    const objType = Object.prototype.toString.call(value);
    return /\[.*\s(.*)\]/g.exec(objType)[1].toLowerCase();
}

export function isObjEmpty(obj: {}) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
}

export function getObjByPath(obj: Object, path: string) {
    let keys = path.split('.');
    let i = 0,
        len = keys.length,
        chain = obj;
    for (; i < len; i++) {
        if (!(keys[i] in chain)) {
            if (chain[0]) {
                if (keys[i] in chain[0]) {
                    chain = chain[0][keys[i]];
                    continue;
                }
            }
            return undefined;
        }
        chain = chain[keys[i]];
    }
    return chain;
}
