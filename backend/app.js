const https = require('https');
const server = http.createServer((req,res))=>{
    console.log('INCOMING REQUEST');
    console.log(reg.method,req.url);
res.end('Request Successful');
});
server.listen(5000);

