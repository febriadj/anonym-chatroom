exports.message = (io, socket) => {
  socket.on('newMessage', ({ username, time, message }) => {
    io.emit('showNewMessage', {
      username, time, message,
    });
  });
}
