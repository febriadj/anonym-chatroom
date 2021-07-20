const socket = io();
const screenWrap = document.getElementsByClassName('screen_wrap');

function chatBoxElement(args) {
  const element = `<div class="chat_box">
    <span class="chat_dot"></span>
    <div class="chat_msg">
      <p class="chat_username">${args.username}</p>
      <p class="msg">${args.message}</p>
      <p class="chat_time">${args.time}</p>
    </div>
  </div>`;

  screenWrap[0].innerHTML += element;
}

socket.on('new_message', (args) => {
  chatBoxElement(args);
});
