const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('request made');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
    // res.write('Hello');

    // res.write('<h2>Hello</h2>');
    // res.write('<p>Hello</p>');
    // res.end();

    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end;
            break;
        default:
            path += '404.html'
            res.statusCode = 400;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
        } else {
            res.write(data);
            res.end();
            // res.end(data); //replace the above two line
        }
    })


})

server.listen(3000, 'localhost', ()=>{
    console.log('server is listning on port:3000');
})