// puedo requerir cualquier cosa que haya instalado por npm -> paquetes son librerias, pluggins, frameworks...

// npm init: crea un archivo de config NPM llamado package.json
// npm init -y

// npm install|i [tipo] <nombre_paquete>: instala un paquete
    //tipos:
        // -S / --save : instalacion local
        // -D / --save-dev : instalacion local (webpack) -> webpack es un paquete que sirve para agarrar muchos archivos y darte uno final
        // -g : instalacion global
// example: npm i -g validator

// package-lock.json -> NO SE TOCA
// node_modules -> NO SE TOCA

const validator = require("validator")

const resultado = validator.isEmail('horacio@gmail.com');
const resultadoErroneo = validator.isEmail('horacio.com');

console.log(resultado);
console.log(resultadoErroneo);