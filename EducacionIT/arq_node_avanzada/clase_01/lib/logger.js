const log4js = require("log4js");

log4js.configure({
  appenders: {
    archivo: { type: "file", filename: "/var/log/clasearch" },
    consola: { type: "stdout" }, // cual es la cosola a la que lo mando
  },
  categories: {
    default: {
      appenders: ["archivo", "consola"],
      level: "all",
    },
  },
});

module.exports = z => log4js.getLogger(z)