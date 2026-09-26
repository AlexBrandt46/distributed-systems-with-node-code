const fs = require("fs");

setImmediate(() => console.log(1));
Promise.resolve().then(() => console.log(2));
console.log(8);