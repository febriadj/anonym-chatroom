const sendWrap = document.getElementsByClassName('send_wrap');
const sendInput = document.getElementsByClassName('send_input');
const sendBtn = document.getElementsByClassName('send_btn');

function emitMessage() {
  const idUser = localStorage.getItem('ID');
  const username = localStorage.getItem('Username');
  const time = new Date();

  socket.emit('newMessage', {
    idUser,
    username,
    time: time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    message: sendInput[0].value,
  }, (response) => {
    console.log(response);
  });

  sendInput[0].value = '';
}

sendBtn[0].addEventListener('click', () => emitMessage());
sendWrap[0].addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    emitMessage();
  }
});
