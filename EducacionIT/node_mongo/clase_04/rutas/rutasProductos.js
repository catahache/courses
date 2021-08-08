const express = require("express");
const router = express.Router();
const controladoresProductos = require("../controladores/controladoresProductos");
const { traerProductos, traerProducto, editarProductos, borrarProductos, crearProductos  } = controladoresProductos;

router.get("/api/productos", traerProductos)

router.get("/api/productos/:id", traerProducto)

router.post("/api/productos", editarProductos)

router.put("/api/productos/:id", crearProductos)

router.delete("/api/productos/:id", borrarProductos)

module.exports = router