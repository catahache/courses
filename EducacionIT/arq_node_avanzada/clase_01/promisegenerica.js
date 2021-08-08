const fs = require("fs");
const _ = require("underscore");
const logger = require("./lib/logger")("curry");

function crearPromesa(fn) {
  return new Promise((resolve, reject) => {
    fn((err, res) => {
      if (err) {
        logger.error(err);
        reject(err);
        return;
      }
      resolve(res);
    });
  });
}

(async function () {
  for (let z of _.range(10)) {
    try {
      let fn = _.partial(fs.appendFile, "/var/log/curry", "datos", "utf8");
      await crearPromesa(fn);
    } catch (err) {
      logger.error(err);
    }
  }
})();
