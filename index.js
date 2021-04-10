const open = require('open');
const {rutas, openNav, jsonLength} = require('./helpers/rutas');
const Readline = require('readline');

/**
 * La funcion readline funciona para poder leer los inputs en consola
 * @type {Readline.Interface}
 * @name readline
 */
const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Es la funcion que nos permite leer el input del usuario
 * @name leer
 * @param {string} req
 */
const leer = (req) => {
    if (req === '0') {
        console.log('Adios');
        readline.close();
    } else if (req > '0' && req < `${jsonLength}`) {
        let newName = parseInt(req);
        openNav(newName);
        console.clear();
        preguntar();
    } else if (req === 'http') {
        readline.question('Buscar http:', name => {
            open('http://' + name)
            console.clear()
            preguntar();
        });
    } else {
        open('https://' + req);
        console.clear();
        preguntar();
    }
}

/**
 * Es la funcion en la que le preguntamos al usuario
 * @name preguntar
 */
const preguntar = () => {
    console.log('Preciona 0 para salir');
    rutas();
    console.log('Ó intriduce un URL');

    readline.question('Buscar: ', name => {
        leer(name);
    });
};

preguntar();

module.exports = {preguntar}