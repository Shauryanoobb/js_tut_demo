//preview of call back hell
//to make the code readable async await or promises is used
const { timeLog } = require('console');
const {readFile,writeFile}=require('fs');
console.time('myTimer');
console.log('start');
readFile('./content/subfolder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    //console.log(first);
    readFile('./content/subfolder/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./content/result_async.txt',
            `here is the result:${first}, ${second}`
        ,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
            console.timeLog('myTimer');
            //THE I/O required 4ms
        })
    })
})
console.log('starting with tasks');
console.timeLog('myTimer');

//you come here since the cpu was idle waiting for I/O
//form the readfile,write file etc,so you get other work done
//while that thread runs paralely
