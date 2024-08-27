const fs = require("fs");
fs.appendFileSync(
  "example.txt",
  "\nThis line will be appended with the text present in example.txt"
);

console.log("File Updated Succesfully");
