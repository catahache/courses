const fs = require("fs");
const logger = require("./lib/logger")("promesas");
const _ = require('underscore')

function crearPromesa() {
  logger.info("creando promesa");

  //constructor: callback -> resolve y reject
  //resolve: resuelve positivamente con lo que esperamos
  //reject: resuelve negativamente, falla
  return new Promise((resolve, reject) => {
    logger.info("entra de inmediato");
    let nombreArchivo = "/var/log/archivito";
    let data = new Date().toString()+'\n';

    fs.appendFile(nombreArchivo, data, "utf8", (err, res) => {
      //err -> error -> objeto de tipo Error
      //res -> resultado -> metadata (cuanto agrego, etc)

      if (err) {
        logger.error(err);
        reject(err);
        return; //para salir del callback
      }

      resolve(res);
    });
    //   fs.writeFile(filename, data, [encoding], [callback])
  });
}

// console.log(_.range(10));

;(async function() {
    for(let z of _.range(10)){
        await crearPromesa();
    }
})();
