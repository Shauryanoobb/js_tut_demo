const http=require('http');
//req shows the incoming request
//response is what we send back
const server=http.createServer((req,res)=>{
    //console.log(req);
    if(req.url==='/'){
        res.end('Welcome to our home page');
    }
    if(req.url==='/about'){
        res.end('here is our short history')
    }
    res.end(`
        <h1>oops!</h1>
        `)
})

server.listen(5000);