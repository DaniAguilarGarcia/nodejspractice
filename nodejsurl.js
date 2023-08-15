//url module is used to divide up a web address into readable
const url = require('url');
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
let qry = url.parse(webAddress, true);
let qrydata = qry.query;//returns an object
console.log(qrydata.firstName);