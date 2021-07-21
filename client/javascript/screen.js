const screenWrap = document.getElementsByClassName('screen_wrap');

function chatBoxElement(args) {
  const idUser = localStorage.getItem('ID');
  const boxColorIfItsYou = idUser === args.idUser ? '#ffe8d6' : '#f6f9fd';

  const element = `<div class="chat_box">
    <span class="chat_dot"></span>
    <div class="chat_msg" style="background: ${boxColorIfItsYou}">
      <p class="chat_username">${args.username}</p>
      <p class="msg">${args.message}</p>
      <p class="chat_time">${args.time}</p>
    </div>
  </div>`;

  screenWrap[0].innerHTML += element;
  screenWrap[0].scrollIntoView(false);
}

socket.on('showNewMessage', (args) => {
  chatBoxElement(args);
});
