const express = require("express");
const hbs = require("hbs");
const rutasVista = require("./rutas/rutasVistas");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const MongoClient = mongodb.MongoClient;

const servidor = express();

servidor.set("view engine", "html");
servidor.engine("html", hbs.__express);

hbs.registerPartials(__dirname + "/views/parciales");

//los middlewate tmb pueden pedirse con una url al principio como los get, post, etc. Es una peticion como cualqueir otra
servidor.use(express.static("public")); // para tomar el css
servidor.use(express.urlencoded({ extended: true }));
servidor.use(express.json());
servidor.use(rutasVista);

// mongoose.connect(
//   "mongodb://localhost:27017/test_base",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     console.log("Cliente DB conectado 27017");
//   }
// ).then(() => {
//     console.log("Cliente DB conectado en 270127");
//   })
//   .catch(() => {
//     console.log("todo mal"); 
//   });


const con = mongoose.connect(
    "mongodb://localhost:27017/test_base",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

con
  .then(() => {
    console.log("Cliente DB conectado en 270127");
  })
  .catch(() => {
    console.log("todo mal"); 
  });

//connect(url,[opciones]/[callback]) https://mongodb.github.io/node-mongodb-native/3.1/api/MongoClient.html#.connect
// MongoClient.connect("mongodb://127.0.0.1:27017",{useUnifiedTopology : true}, (err, client) => {
//   if (err) {
//     throw new Error(err); // arrojo el error
//   }
//   console.log("Cliente DB conectado en 270127")
//   // client tmb es MongoClient!!! pero esta YA ESTA CONECTADO A LA DB, con lo cual, lo que haga con esta variable afecta a mi db
//   // client.db() Mueve el pontero de memoria a una base de datos virtual
//   const db = client.db("test_base"); 
//   const usuarios = db.collection("usuarios");

// }); // al hacer mongo en la consola sale el puerto

servidor.listen(8000, () => {
  console.log("Servidor Web escuchando en 8000");
});
