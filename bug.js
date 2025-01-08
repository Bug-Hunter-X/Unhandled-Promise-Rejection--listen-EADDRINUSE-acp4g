const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({message: 'Hello, World!'}));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});

//Error: Unhandled promise rejection
//Error: listen EADDRINUSE: address already in use :::8080