const fs = require("fs");

const data = fs.readFileSync("example.txt", { encoding: "utf8" });
console.log(data);
