//require is to use modules
//start with ./
const names=require('./names');
const sayhi=require('./sayhi');
//console.log(names);
//console.log(sayhi);
sayhi(names.a);
sayhi(names.b);
// sayhi(secret); 
    