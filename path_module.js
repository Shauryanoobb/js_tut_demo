//path module
const path=require('path');
//console.log(path.dirname)
//this module has all path manipulations
const absolute=path.resolve(__dirname);
console.log(absolute);

//this will be very useful because during deployment you wont
//know the exact file structre that is going to be used in heroku

