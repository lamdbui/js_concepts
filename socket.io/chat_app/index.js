var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);  // socket gets initialized with the http object

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(3000, () => {
  console.log('Listening on port 3000');
});
