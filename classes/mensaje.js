

class Mensaje {

    constructor(userId, nombre = '', message, time, status = '') {
        this.userId = userId;
        this.nombre = nombre;
        this.message = message;
        this.time = time;
        this.status = status;
    }
}

module.exports = Mensaje;