const express = require('express');
const path = require('path');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = process.env.PORT ?? 3000;

const { message } = require('./controllers');

app.set('views', 'client/views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/', (req, res) => res.render('index'));

io.on('connection', (socket) => {
  message(io, socket);
});

http.listen(port);
console.log(`app running on port ${port}`);
