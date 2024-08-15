//fs module (synchronous)
//for interacting wiht file systems
const {readFileSync,writeFileSync}=require('fs');
console.log('start');
const first=readFileSync('./content/subfolder/first.txt','utf8');
const second=readFileSync('./content/subfolder/second.txt','utf-8');
const third=readFileSync('./content/third.txt','utf-8');
//this could be very time consuming requiring i/o time
writeFileSync('./content/result_sync.txt',
    `here is the result:${first}, ${second}`
)
console.log('done with this task')
console.log('starting the next one')
//flag a appends

//its not always useful to go line by line
