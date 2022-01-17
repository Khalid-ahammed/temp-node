const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our home page')
  } else if (req.url === '/about') {
    res.end('welcome to about')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We got lost </P>
    <a href="/">go back home</a>
   `)
  }
})

server.listen(5000)
