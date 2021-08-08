/*
Se requiere una fx que acepte dos parametros:
una fx de logger y un array
y que se llame al logger por cada item del array
 */
const _ = require("underscore");
const logger = require("./lib/logger")("composicion");

function excerciseLog(logfx, array) {
    for (let number of array){
        logfx(number)
    }
}

function log(data){
    logger.info(data)
} 

const logWarn = z => logger.warn(z)

excerciseLog(log, _.range(10))
excerciseLog(logWarn, ['Warn 1', 'Warn 2', 'Warn 3'])