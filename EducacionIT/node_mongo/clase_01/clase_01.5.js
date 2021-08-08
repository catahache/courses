const http = require("http") // modulo que te permite hacer un servidor web, como no pongo la url relativa, node interpreta que lo tiene que buscar a alguna de las carpetas creadas en la instalacion 

//en js no existen las clases, se usa la palabra reservada class, pero no son clases

const servidor = http.createServer() //creo mi servidor
servidor.on('request',(req, res)=>{
    // request es un evento
    // req lo que llega del cliente -> en la docu seria Incoming message
    // respuesta, que es lo que le voy a dar a cambio segun lo que me pida, si me pide devolver algo
    console.log(req.httpVersion) // version del navegador
    console.log(req.method) // metodo Get, Post...
    console.log(req.url) // en este caso sera /, porque es localhost:8000

    res.writeHead(200, "OK", {"content-type":""})
    res.write("hola") //con esto escribo lo que le quiero mandar al user
    res.write(" mundooo")
    res.end("!") // lo que el user ve como respuesta, podes mandarle un stream o un buffer. Tengo que ejectutaro porque sino la res no tiene corte, el nav no le llega el final del stream, y todavia esta esperando
})

servidor.listen(8000);

// servidor.on("evento",()=>{}) evento

//los modulos usan otros moludos, por eso puedo usar eventos en el modulo http
//bsucar como funciona un stream