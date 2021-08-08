// CommonJS (con requires y module exports) 
// const x = require("")
// module.exports.x = ?

// ES6
// import X from ""
// export default X
const express = require("express");
const hbs = require('hbs');

// Creo la instancia del servidor
const servidor = express(); 

// Configuraciones del servidor express:
// Listado de las cosas que andan por defecto https://expressjs.com/en/resources/template-engines.html
// servidor.set("nombre", "valor") configura cualquier cosa que haya en la tabla https://expressjs.com/en/4x/api.html#app (application settings)
//servidor.set("view engine", "hbs") // le dice a express que motor queres usar. Ahora express sabe que vas a usar hbs, entonces, como le decis el motor de vista, ahora tenes habilitado otra manera de responder que no sea sendFile -> con sendFise mando archivo en crudo, no renderizo, que justo sea html el mera coincidencia. Te manda el archivo en crudo. Por eso ahora usamos render. Antes tmb podias usar render, pero te interpreta que el motor es html por defecto, no hbs

servidor.set("view engine", "html")
servidor.engine("html", hbs.__express)//para decirle a mano a express cual va a ser la funcion motor. Entonces puede seguir usando un archivo de tipo htm l, pero esto no lo va a leer el motor de html, sino el que indicamos en engine

hbs.registerPartials(__dirname+'/views/parciales') // busca estar carpeta y todos los archivos html que tengo ahi los puedo llamar desde cualquier otro archivo (tempates reutilizables)


//Configuraciones del motor express:

// servidor.use("/", acaVaMiMiddleware) -> pasa por el middleware cuando el user pide la url
// servidor.use(acaVaMiMiddleware) -> si no le pongo url pasa siempre por aca, no importa que pedido haga el usuario

// Escribir los middleware antes de las rutas! para que se ejecuten primero 
// Configuracion de un middleware global para todas las url y todos los pedidos, para que si me mandan parametros por body de tipo application/json yo los pueda leer en Request.body
servidor.use(express.urlencoded({ extended: true })) // tambien obtiene el formato application/x-www-form-urlencoded
// Middleware que te premite recibir info por metodos que no sean get, siempre y cuando te manden json
servidor.use(express.json()) 


// servidor.get(<url>, (req, res)=>{}); // espera que un cliente haga un pedido a <url> con metodo get y responde con res
servidor.get("/", (req, res) => {
    console.log(req.query)
    // res.writeHead()
    // res.write()
    // res.end("Hola Mundo")
    // res.end("Hola Mundo")
    // res.send([{nombre: "Horacio"}])
    // res.json([{nombre: "Horacio"}])
    // res.sendFile("./index.html") falta __dirname -> path absoluto
    //res.sendFile(__dirname + "/index.html")
    res.render("index") // asume que es hbs porque lo puse como motor. Tiene que estar en el directorio views (por una config de express)
})

servidor.post("/", (req, res) => {
    console.log(req.body);
    res.send("test")
})

servidor.get("/contacto", (req, res) => {
    // res.sendFile(__dirname + "/contacto.html")
    res.render("contacto")
})

servidor.get("/productos", (req, res) => {
    // res.sendFile(__dirname + "/productos.html")
    res.render("productos")
})

servidor.get("/productos/:id ", (req, res) => {
    console.log(req.params)
    // res.sendFile(__dirname + "/productos.html")
    res.render("productos")
})

servidor.listen(8000, () => {
    console.log("Servidor Web escuchando en 8000"); // si esta todo bien me muestra el msj
}); // escucho un puerto
