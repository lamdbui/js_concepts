var app = require('express')();
var http = require('http').Server(app);

app.get('/', (request, response) => {
  response.send('<h1>Hello, World!</h1>');
});

http.listen(3000, () => {
  console.log('Listening on port 3000');
});
