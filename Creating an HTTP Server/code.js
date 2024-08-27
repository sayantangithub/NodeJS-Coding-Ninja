//start by importing 'http' module.
const http = require("http");

//creating a simple server using the 'http.createServer()' method.

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

//Make server listen on specific port.
server.listen(3030, () => {
  console.log("Server is listening to port no 3030");
});
