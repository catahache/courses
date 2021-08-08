const http = require('http')
const port = 3000

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html') // send the plain text to the browser
    res.write('<body class ="app"></body>')
    res.write('<h3>Welcome to catitalandia</h3>')
    res.write('<p>this is nodejs code</p>')
    res.end()
    // console.log('req url', req.url)
    // console.log('req method', req.method)
})

server.listen(port,()=>{
    console.log(`listening on port ${port}`)
})