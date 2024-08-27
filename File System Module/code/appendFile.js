const fs = require("fs");
fs.appendFile(
  "data.txt",
  "\nThis line is appended by appendFile method",
  (err) => {
    if (err) {
      console.log(err);
    } else console.log("File appended Successfully");
  }
);
