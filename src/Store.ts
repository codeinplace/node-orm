class Store {

    private static data = {};

    static get(key: string) {
        return this.data[key];
    }

    static set(key: string, data: {}) {
        if (!(key in this.data)) {
            this.data[key] = {};
        }
        this.data[key] = Object.assign(this.data[key], data);
    }

    static getAll() {
        return this.data;
    }
}

export { Store };
