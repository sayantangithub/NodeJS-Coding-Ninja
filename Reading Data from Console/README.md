# Reading Data from Console

Reading user input from the console is crucial for building interactive CLI apps and
collecting user preferences in command-line tools. This feature enables command-line applications to interact with users and process their input in the
application. Other use cases include creating a chat application, a command-line
calculator, or using git and npm commands in the terminal.

## Readline module

To read input from the console in Node.js, we can use the built-in Readline module.
Readline is a module that provides an interface for reading data from a Readable
stream (such as process.stdin) on a line-by-line basis.

To use the Readline module, we need to require it at the beginning of our file:

```javascript
const readline = require("readline");
```

Here's an example code snippet that takes two inputs from the command line using
Readline module and returns their sum:

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (num1) => {
  rl.question("Enter the second number: ", (num2) => {
    const result = parseInt(num1) + parseInt(num2);
    console.log(`The result is: ${result}`);
    rl.close();
  });
});
```

The readline module exports several functions that we can use to interact with the
console. The most commonly used are:

- readline.createInterface(): This function creates a new Readline interface,
  which provides methods for reading input from the console.
- rl.question(): This function displays a prompt to the user and waits for them to
  enter a response. The response is then passed to a callback function that we
  provide.
- rl.close(): This function closes the Readline interface and frees up resources.
