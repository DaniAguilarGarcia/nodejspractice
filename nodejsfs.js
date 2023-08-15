// fs module is use to interact with a file system. reads a local file sunchronously
//sample code
const fs = require('fs');
const data = fs.readFile('sample.tx', 'utf8');
//print contents
console.log(data);