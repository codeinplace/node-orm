var Store = {
    data: {},

    get: function (key: string) {
        return this.data[key];
    },

    set: function (key: string, data: {}) {
        if (!(key in this.data)) {
            this.data[key] = {};
        }
        this.data[key] = Object.assign(this.data[key], data);
    }
};

export { Store };
