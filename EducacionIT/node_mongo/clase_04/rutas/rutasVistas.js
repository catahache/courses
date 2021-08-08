// import {Router} from 'express' -> nueva sintaxis
const express = require("express");
const router = express.Router();
const controladoresVista = require("../controladores/controladoresVistas");
const { vistaHome, vistaContacto, vistaProductos } = controladoresVista;

router.get("/", vistaHome);

router.get("/contacto", vistaContacto);

router.get("/productos", vistaProductos);
module.exports = router;

// este es mi midleware
