#!/usr/bin/env node
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
 * @param {string | number | NaN} req
 */
const leer = async (req) => {
    if (req === 0) {
        console.log('Adios');
        readline.close();
    } else if (req > 0) {
        let newName = req;
        await openNav(newName);
        readline.close();
    } else if (req === 'http') {
        readline.question('Buscar http:', async name => {
            await open('http://' + name)
            readline.close();
        });
    } else if (req === 'https') {
        readline.question('Buscar https:', async name => {
            await open('https://' + name)
            readline.close();
        });
    } else {
        await open('https://www.google.com/search?q=' + req);
        console.clear();
        readline.close();
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
        const nameint = parseInt(name);
        if ( isNaN(nameint)) {
            leer(name);
        }else{
            leer(nameint);
        }
        
    });
};

preguntar();

module.exports = {preguntar}