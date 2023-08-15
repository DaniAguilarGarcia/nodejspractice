//util module is intended for internal use for accomplishing tasks as debugging and deprecating functions
let util = require('util');
let str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++){
    console.log(util.format(str, i)); // outputs the times a loop has been executed
}