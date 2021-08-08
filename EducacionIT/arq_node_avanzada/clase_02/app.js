/*
 Ejercicio:

     Hacer un servidorcito en express
     Hacer un app.get('/'), (req, res) => {
         Vamos a tomar el header "Authorization".
         Hacerle bas64 a Textoplano -> ahi vamos a ver usu:pass
         res.send('gracias')
     })
 */

const express = require("express");

const servidor = express(); 

servidor.use(express.json()) 

servidor.get("/", (req, res) => {
     // Vamos a tomar el header "Authorization".
     // Hacerle bas64 a Textoplano -> ahi vamos a ver usu:pass
    res.send('gracias')
})

servidor.listen(3000, () => {
    console.log("Servidor Web escuchando en 3000"); 
}); 
