//Reading a file
const fs = require("fs");

const data = fs.readFile("data.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
