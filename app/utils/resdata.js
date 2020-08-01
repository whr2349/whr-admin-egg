class resdata {
    constructor(code = 0, message = "", data = {}) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
}

module.exports = resdata