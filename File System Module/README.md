# File System Module

The FileSystem module, also known as 'fs', is a built-in module in Node.js that
provides a variety of methods for interacting with the file system. It enables you to
perform various operations on files and directories, including reading, writing,
deleting, and updating them.

## Types of “fs” methods

There are two types of fs methods available: blocking (or synchronous) and
non-blocking (asynchronous).

### Using Synchronous Methods

1. Reading a file: To read a file, you can use the fs.readFileSync() method, which
   returns a buffer. You can convert the buffer to a string, or you can set the
   encoding property to '**utf8**' to get the content directly as a string.

```javascript
const fs = require("fs");

const data = fs.readFileSync("example.txt", { encoding: "utf8" });
console.log(data);
```

2. Writing to a file: To write data to a file, use the fs.writeFileSync() method. It creates a new file or overwrites an existing one.

```javascript
const fs = require("fs");
fs.writeFileSync(
  "example.txt",
  "It creates a new file or overwrites an existing one."
);
console.log("File written Succesfully");
```

3. Updating a file: If you want to append content to an existing file, use the fs.appendFileSync() method.

```javascript
const fs = require("fs");
fs.appendFileSync(
  "example.txt",
  "\nThis line will be appended with the text present in example.txt"
);

console.log("File Updated Succesfully");
```

4. Deleting a file: To delete a file, use the fs.unlinkSync() method.

```javascript
const fs = require("fs");

fs.unlinkSync("example.txt");
console.log("File deleted Sucessfully");
```

### Using Asynchronous Methods

We learned about performing CRUD operations using blocking code with the File
System module, which means while file operations are being performed, our main
thread is blocked, and it can't perform any other task. Blocking code can make your
app less responsive and slow. To avoid this, we can use non-blocking or
asynchronous methods available in the FileSystem module.

1. Reading a file: To read a file asynchronously, use fs.readFile().

```javascript
//Reading a file
const fs = require("fs");

const data = fs.readFile("data.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
```

2. Writing to a file: To write data to a file asynchronously, use fs.writeFile().

```javascript
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
```

3. Updating a file: To append content to a file asynchronously, use
   fs.appendFile().

```javascript
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
```

4. Deleting a file: To delete a file asynchronously, use fs.unlink().

```javascript
const fs = require("fs");
fs.unlink("data.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is updated");
  }
});
```
