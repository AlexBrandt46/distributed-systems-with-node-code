#!/usr/bin/env node

const fs = require("fs");

// 1. Node.js is single-threaded, but it uses an event loop to handle asynchronous operations. This means that while the main thread is busy executing code, other operations (like file I/O) can be handled in the background.
// 2. The `fs.readFile` function is asynchronous, meaning it will not block the main thread while reading the file. Instead, it will schedule the read operation and continue executing the rest of the code.
// 3. The `setImmediate` function is used to schedule a callback to be executed after the current event loop tick, allowing us to see that it runs after the file read operation has been initiated but before it completes.
// 4. The output of this code will demonstrate the non-blocking nature of Node.js, as the "This runs while the file is being read..." message will be logged before the contents of the file are printed, even though the file read operation may take some time to complete.

// 1) Node.js reads /etc/passwd. It's scheduled by libuv.
fs.readFile("/etc/passwd", (err, data) => {
  // 4) Once the file is done reading, libuv passes the result to the V8 event loop.
  if (err) throw err;
  console.log(data);
});

// 2) Node.js runs a callback in a new stack. It's schedule by V8.
setImmediate(() => {
  // 3) Once the previous stack ends, a new stack is created and prints a message.
  console.log(
    "This runs while the file is being read, but after the current event loop tick.",
  );
});
