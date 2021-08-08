const asyncForLoop = require("./lib/asyncforloop-cata");

asyncForLoop(
  10,
  (nro, next, abort) => {
    console.log("ingreso al  bloque async");
    setTimeout(() => {
      if (nro === 3) {
        abort(new Error("no puede ser 3"));
        return;
      }
      console.log("fin operacion async");
      next()
    }, 1000);
  },
  (err) => {
    if (err) {
      console.log("termino con error");
      console.log(err);
      return;
    }
    console.log("termino naturalmente");
    siguiente()
  }
);

function siguiente() {
    console.log('siguiente...');
}
