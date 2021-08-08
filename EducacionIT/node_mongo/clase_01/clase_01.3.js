// (function(){ en front tenia que hacer esto para ocultar

// para ejecutar
    var a = 1
    var b = 2
    var suma = a + b

    // console.log(__filename)
    // console.log(__dirname)
    // console.log(module) // a cada archivo se le llama module, te representa el mismo archivo. Node le asigna a cada archivo un id especifico

    module.exports.suma = suma // al obj le sumo la prop a
    // console.log(module.exports) //en frontend no se usa el obj global
    
// })()
// En la documentacion de Node, en globals, vemos todo lo que tenemos disponible de manera global. Lo podemos usar sin importar, cualquier otra cosa, debemos exportarla
