const http = require('http');

const server = http.createServer((req, res) => {
     if(req.url === '/'){
        res.end('welcome to our home page');
        return ;  
     }
   else if(req.url === '/about'){
        res.end('we are the about page');
        return ;
     }
    else  
    {
     res.end(`
        <h1>Oops!</h1> 
        <p>we can't seem to find the page you are looking for</p> 
        <a href="/">back home</a> 
    `
    );
    }
})

server.listen(5000)