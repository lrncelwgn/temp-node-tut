const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our page');
    }
    else if(req.url === '/about'){
        res.end('Here is our short story.')
    }
    else{
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page that we are looking for</p>
        <a href="/">Back Home</a>
        `)
    }
})

server.listen(1300)