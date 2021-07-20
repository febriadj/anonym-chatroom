const express = require('express');
const path = require('path');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = process.env.PORT ?? 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));

io.on('connection', (socket) => {
  socket.on('new_message', (args) => {
    const { username, time, message } = args;

    io.emit('new_message', {
      username, time, message,
    });
  });
});

http.listen(port);
console.log(`app running on port ${port}`);
