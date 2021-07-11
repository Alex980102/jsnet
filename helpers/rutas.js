const jsonData = require('../assets/routes.json');
const open = require('open');

const jsonLength = (Object.keys(jsonData).length).toString;

/**
 * Es la funcion para imprimir las rutas
 * @name rutas
 */
const rutas = () => {
    var count = 0;
    for (let i in jsonData) {
        count++;
        console.log(`Preciona ${count} para buscar ${i}`);
    }
}

/**
 * Es la funcion que nos permite abrir la pagina que decide el usuario
 * @name openNav
 * @param {number | string} number
 */
const openNav = (number) => {
    let count = 0;
    for (let i in jsonData) {
        count++;
        if (count === number) {
            open(`${jsonData[i]}`);
        }
    }
}

module.exports = {rutas, openNav, jsonLength}