const sendWrap = document.getElementsByClassName('send_wrap');
const sendInput = document.getElementById('send_input');
const sendBtn = document.getElementById('send_btn');

function emitMessage() {
  const username = window.localStorage.getItem('username');
  const time = new Date();

  socket.emit('new_message', {
    username,
    time: time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    message: sendInput.value,
  }, (response) => {
    console.log(response);
  });

  sendInput.value = '';
}

sendBtn.addEventListener('click', () => emitMessage());
sendWrap[0].addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    emitMessage();
  }
});
