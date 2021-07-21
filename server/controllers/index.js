exports.message = (io, socket) => {
  socket.on('newMessage', ({
    idUser,
    username,
    time,
    message,
  }) => {
    io.emit('showNewMessage', {
      idUser, username, time, message,
    });
  });
}
