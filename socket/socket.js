const { io } = require("../index");
const Usuario = require('../classes/usuarios');
const ListaUsuarios = require('../classes/listaUsuarios');
const Mensajes = require("../classes/mensajes");
const Mensaje = require("../classes/mensaje");

let usuariosConectados = new ListaUsuarios();
let mensajes = new Mensajes();

io.on("connection", (socket) => {
  console.log("user connected");

  let usuario = new Usuario(socket.id);
  usuariosConectados.addUser(usuario);

  io.emit('new-user', usuariosConectados.getUsuariosConectados());
  io.emit('messages', mensajes.getMessages());

  socket.on("set-user", (data, callback) => {
    usuariosConectados.updateUserName(socket.id, data.nombre);
    // socket.join(  )

    // io.to(socket.id).emit()
    io.emit('new-user', usuariosConectados.getUsuariosConectados())
    callback({ usuario: usuariosConectados.getUser(socket.id) });
  });

  socket.on("new-message", (data) => {
    let mensaje = new Mensaje(data.usuario.id, data.usuario.nombre, data.message.message, data.message.time, data.message.status);
    mensajes.newMessage(mensaje);
    io.emit('messages', mensajes.getMessages());
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    usuariosConectados.deleteUser(socket.id)
    io.emit('new-user', usuariosConectados.getUsuariosConectados())
  });

});
