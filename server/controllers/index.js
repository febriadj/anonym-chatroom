exports.message = (io, socket) => {
  socket.on('new_message', ({ username, time, message }) => {
    io.emit('new_message', {
      username, time, message,
    });
  });
}
