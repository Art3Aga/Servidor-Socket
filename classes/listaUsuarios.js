

class ListaUsuarios {

    _usuariosConectados = [];

    constructor() {}

    addUser(user) {
        this._usuariosConectados.push(user);
    }

    updateUserName(id, nombre) {
        for( let usuario of this._usuariosConectados ) {
            if ( usuario.id === id ) {
                usuario.nombre = nombre;
                break;
            }
        }
    }

    getUser( id ) {
        return this._usuariosConectados.find( usuario => usuario.id === id );
    }

    getUserByRoom( sala ) {
        return this._usuariosConectados.filter( usuario => usuario.sala === sala );
    }

    deleteUser( id ) {
        const tempUsuario = this.getUser( id );
        this._usuariosConectados = this._usuariosConectados.filter( usuario => usuario.id !== id );
        return tempUsuario;
    }

    getUsuariosConectados() {
        return this._usuariosConectados;
    }

}

module.exports = ListaUsuarios;