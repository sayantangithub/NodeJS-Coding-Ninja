const fs = require("fs");
fs.writeFileSync(
  "example.txt",
  "It creates a new file or overwrites an existing one."
);
console.log("File written Succesfully");
