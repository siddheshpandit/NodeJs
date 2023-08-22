const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    // console.log("request has been made from browser to server");
    // console.log(req);
    res.setHeader('Content-Type','text/html');
    let path='./views'
    switch (req.url) {
        case '/':
            path+='/index.html';
            break;
        case '/about':
            path+='/about.html';
            break;
        default:
            path+= '/404.html';
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            // console.log(data);
            res.write(data);
            res.end();
        }
    });
})


server.listen(4200,'localhost',()=>{
    console.log("Server listening on port 4200");
})
