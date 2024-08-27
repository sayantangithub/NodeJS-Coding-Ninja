const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      console.log("Data Recieved:", body);
      res.end("this is a post request");
    });
  } else {
    res.end("this is a get request");
  }
});
server.listen(3030);
