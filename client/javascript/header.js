const userOnline = document.getElementsByClassName('users_online');

socket.on('userConnected', ({ online }) => {
  userOnline[0].innerHTML = `${online} Online`;
});

socket.on('userDisconnect', (users) => {
  userOnline[0].innerHTML = `${users} Online`;
});
