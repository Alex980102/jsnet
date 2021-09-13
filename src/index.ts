#!/usr/bin/env node
import open from "open";
import Readline from 'readline';
import { openNav, rutas } from "./controllers/rutascontroller";

const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const leer = async (req: string | number ) => {
    await req;
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

const  leerString = async(req: String) => {
    await req;
    let multiWord = await WordCount(req);
    await open(`https://www.google.com/search?q=${multiWord}`);
    console.log(`la busqueda es: ${multiWord}`);
    console.clear();
    readline.close();
}

export const preguntar = async () => {
    console.log('Preciona 0 para salir');
    await rutas();
    console.log('Ó intriduce un URL');

    readline.question('Buscar: ', name => {
        const nameint = parseInt(name);
        if ( isNaN(nameint)) {
            leerString(name);
        }else{
            leer(nameint);
        }  
    });
};

const WordCount = async(str: any) => { 
    let word = str.split(" ");
    let newWord = [];
    for (let i = 0; i < word.length; i++) {
        newWord.push(word[i]);
        newWord.push('+')
    }
    
    return newWord.join('');
  }

  module.exports = preguntar;