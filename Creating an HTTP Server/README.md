# Creating an HTTP Server

To create a server in Node.js, use the built-in 'http' module.

1. Start by importing it:

```javascript
//start by importing 'http' module.
const http = require("http");
```

2. Now, create a simple server using the 'http.createServer()' method: The createServer method creates an HTTP server. It takes a callback function as an argument that will be called every time a request is made to the server. The callback
   function has two arguments: req, which represents the incoming HTTP request, and res, the HTTP response object we can use to send data back to the client.

```javascript
//creating a simple server using the 'http.createServer()' method.
const server = http.createServer((req, res) => {
  res.end("Hello World");
});
```

3. Make the server listen on a specific port:

```javascript
//Make server listen on specific port.
server.listen(3030, () => {
  console.log("Server is listening to port no 3030");
});
```
