

class Mensajes {

    _mensajes = [];

    constructor() {}

    newMessage(message) {
        this._mensajes.push(message);
    }

    getMessages() {
        return this._mensajes;
    }

}

module.exports = Mensajes;