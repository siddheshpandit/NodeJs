const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("request has been made from browser to server");
})


server.listen(3000,'localhost',()=>{
    console.log("Server listening on port 3000");
})
