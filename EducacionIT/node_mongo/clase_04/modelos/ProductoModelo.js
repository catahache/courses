const mongoose = require("mongoose")

const ProductoSchema = new mongoose.Schema({
    titulo : {
        type: String
    },
    precio : {
        type: Number
    }
}) //si yo llego a insertar un nuevo producto y tienen las props titulo y precio tienen que ser de este tipo

const Producto = mongoose.model("Producto", ProductoSchema) // recibe nombre de la coleccion a a que hago queries y schema. El nombre se traduce en minuscula y en plural

module.exports = Producto