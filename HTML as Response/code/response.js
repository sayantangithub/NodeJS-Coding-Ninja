const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync("index.html");
  res.end(data);
});

server.listen(8000, () => {
  console.log("Server is listening to port no. 8000");
});
