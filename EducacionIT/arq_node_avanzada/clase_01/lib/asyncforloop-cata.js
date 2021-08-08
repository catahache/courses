/* 
 Cant Iteraciones
 Callback nroIteracion:Integer, next:Function, abort:Function(Err)
 onFinish
*/

function asyncForLoop(cantIteraciones, callback, onFinish) {
  if(onFinish === undefined){
    onFinish = z => {}
  }
    // onFinish = (!onFinish) ? (z) => z : onFinish // si no viene el onFInish es la fx identity. (z) => z Patron de disenio null object 
  (function innerFunction(iteracionActual) {
    if (cantIteraciones === iteracionActual) {
      onFinish(null);
      return;
    }
    callback(
      iteracionActual,
      () => {
        // next
        setTimeout(() => {
          // pone en la cola de llamados a fx la cant de milisegs que indicamos
          // si es 0 lo va a poner en la cola y al cumplirse los 0 milisegs lo invoca

          innerFunction(iteracionActual + 1);
        }, 0)
      },
      (err) => {
        // abort
        onFinish(err);
      }
    );
  })(0);
}

module.exports=asyncForLoop
