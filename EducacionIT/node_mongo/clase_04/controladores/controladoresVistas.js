const vistaHome = (req, res) => {
  res.render("index");
};

const vistaContacto = (req, res) => {
  res.render("contacto");
};

const vistaProductos = (req, res) => {
  res.render("productos");
};

const traerProductos = (req, res) => {
  ProductoModelo.find()
}

module.exports = {
    vistaHome, vistaContacto, vistaProductos
}