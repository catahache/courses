const ProductoModelo = require("../modelos/ProductoModelo")

const traerProductos = (req, res) => {
    ProductoModelo.find();
}

const traerProducto = (req, res) => {}

const crearProductos = (req, res) => {}

const editarProductos = (req, res) => {}

const borrarProductos = (req, res) => {}

module.exports = {
    traerProductos, traerProducto, crearProductos, editarProductos, borrarProductos
}