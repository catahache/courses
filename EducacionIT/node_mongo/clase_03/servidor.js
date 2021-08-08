const express = require("express");
const hbs = require('hbs');
const rutasVista = require('./rutas/rutasVistas')

const servidor = express(); 

servidor.set("view engine", "html")
servidor.engine("html", hbs.__express)

hbs.registerPartials(__dirname+'/views/parciales') 

//los middlewate tmb pueden pedirse con una url al principio como los get, post, etc. Es una peticion como cualqueir otra
servidor.use(express.static("public")) // para tomar el css
servidor.use(express.urlencoded({extended:true})) 
servidor.use(express.json()) 
servidor.use(rutasVista);

servidor.listen(8000, () => {
    console.log("Servidor Web escuchando en 8000");
});
