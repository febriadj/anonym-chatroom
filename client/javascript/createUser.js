const createBox = document.getElementsByClassName('create_user');
const createWrap = document.getElementsByClassName('create_user_wrap');
const inputUsername = document.getElementsByClassName('create_username');
const createBtn = document.getElementsByClassName('create_btn');

if (localStorage.getItem('Username') !== null) {
  createBox[0].setAttribute('style', 'display: none');
}

function handleSubmit() {
  const username = inputUsername[0].value;

  if (username.length < 3) {
    const errNotif = `<div class="error_notif">
      <p>Nama Kamu Terlalu Pendek</p>
    </div>`;

    createBox[0].innerHTML += errNotif;
    setTimeout(() => window.location.reload(true), 3000);

    return false;
  }

  if (username.length > 15) {
    const errNotif = `<div class="error_notif">
      <p>Nama Kamu Terlalu Panjang</p>
    </div>`;

    createBox[0].innerHTML += errNotif;
    setTimeout(() => window.location.reload(true), 3000);

    return false;
  }

  const id = Math.random().toString(36).slice(2);

  localStorage.setItem('ID', id);
  localStorage.setItem('Username', username);

  window.location.reload(true);

  return true;
}

createBtn[0].addEventListener('click', () => {
  handleSubmit();
});

createWrap[0].addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    handleSubmit();
  }
});
