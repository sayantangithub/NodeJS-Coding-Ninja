const fs = require("fs");
fs.writeFile(
  "data.txt",
  "It is a file created by writeFile function",
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File successfully created.");
    }
  }
);
