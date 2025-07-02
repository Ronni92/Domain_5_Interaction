let ioGlobal = null;

export const configureSocket = (io) => {
  ioGlobal = io;

  io.on('connection', (socket) => {
    console.log(` Usuario conectado: ${socket.id}`);

    socket.on('join', (room) => {
      socket.join(room);
      console.log(` Usuario se unió a la sala: ${room}`);
    });

    socket.on('message', ({ room, message }) => {
      console.log(` Mensaje en ${room}:`, message);
      io.to(room).emit('message', message);
    });

    socket.on('disconnect', () => {
      console.log(` Usuario desconectado: ${socket.id}`);
    });
  });
};

export const emitToRoom = (room, message) => {
  if (ioGlobal) {
    ioGlobal.to(room).emit('message', message);
  }
};
