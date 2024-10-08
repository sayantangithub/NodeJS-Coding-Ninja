# HTML as Response

To return an HTML file, we need to read it using the fs module and then send its
content as a response. Let's create a simple example to demonstrate this.

1. First, create an HTML file named index.html with some primary content:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
  </head>
  <body>
    <h1>Welcome to my Portfolio</h1>
    <p>This is a simple example of serving a HTML file using Node.js</p>
  </body>
</html>
```

2. Now, modify the server that serves this file:

```javascript
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync("index.html");
  res.end(data);
});

server.listen(8000, () => {
  console.log("Server is listening to port no. 8000");
});
```

In this example, we are using the fs.readFileSync method to read the index.html
file, and it can read files and provide content to you.
