const fs = require("fs");
const _ = require("underscore");
const logger = require("./lib/logger")("curry");

function escribirArchivo(nombreArchivo, data, callback) {
  fs.appendFile(nombreArchivo, data, "utf8", callback);
}

escribirArchivo(
  "/var/log/archivito",
  new Date().toString() + "\n",
  (err, data) => {
    if (err) {
      logger.error("error");
      return;
    }
    logger.info("ok");
  }
);

let fnEscribirArchivito = _.partial(escribirArchivo, "/var/log/archivito");
let fnEscribirFechaHora = _.partial(
  escribirArchivo,
  "/var/log/archivito",
  new Date().toString()
);

// partial application : aplicar una fx es invocarla, es igual. Me retorna otra fx pero con un parametro cargado

fnEscribirArchivito("esto es con curry", (err, data) => {});
fnEscribirFechaHora((err, data) => {
  logger.error(err);
  logger.info(data);
});




logger.info('\n\n\n***********HASKEL***********');

// Haskell -> no existe una fx con mas de 1 parametro:
function sumar(x) {
  return function (y) {
    return x + y;
  };
}

logger.info("resultado de sumar");
logger.info(sumar(3)(5));

let sumar10 = sumar(10);
logger.info("ya desplazado");
logger.info(sumar10("hola"));
