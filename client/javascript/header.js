const userOnline = document.getElementsByClassName('users_online');

socket.on('userConnected', ({ online }) => {
  userOnline[0].innerHTML = `${online} pengguna sedang Online`;
});

socket.on('userDisconnect', (users) => {
  userOnline[0].innerHTML = `${users} pengguna sedang Online`;
});

const headerUsername = document.getElementsByClassName('header_username');
const logoutBtn = document.getElementsByClassName('logout_btn');

function showNameOnHeader() {
  const username = localStorage.getItem('username');
  headerUsername[0].innerHTML = username;
}

showNameOnHeader();

logoutBtn[0].addEventListener('click', () => {
  localStorage.removeItem('username');

  window.location.reload(true);
});
