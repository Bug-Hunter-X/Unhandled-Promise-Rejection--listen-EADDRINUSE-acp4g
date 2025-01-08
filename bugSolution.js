const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello, World!' }));
};

const server = http.createServer(requestListener);

const port = 8080;
let retries = 3;

function startServer(){
  server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE' && retries > 0) {
      console.log(`Port ${port} is in use, retrying in 1 second...`);
      retries--;
      setTimeout(startServer, 1000);
    } else {
      console.error(`Failed to start server: ${err}`);
      process.exit(1); // Exit with error code
    }
  });
}

startServer();