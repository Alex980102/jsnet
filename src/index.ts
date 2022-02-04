#!/usr/bin/env node

import open from "open";
import Readline from 'readline';
import {
    openNav,
    rutas
} from "./controllers/rutascontroller";

const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const leer = async (req: number) => {
    await req;
    if (req === 0) {
        console.log('Adios');
        readline.close();
    } else if (req > 0) {
        let newName = req;
        await openNav(newName);
        // preguntar();
        console.clear();
        readline.close();
    }
}

const leerString = async (req: String) => {
    await req;
    if (req === 'hp') {
        readline.question('Buscar http:', async name => {
            await open('http://' + name)
            readline.close();
            console.clear();
            // preguntar();
        });
    } else if (req === 'hs') {
        readline.question('Buscar https:', async name => {
            await open('https://' + name)
            readline.close();
            console.clear();
            // preguntar();
        });
    } else if (req === 'yo') {
        // https://www.youtube.com/results?search_query=
        readline.question('Buscar youtube:', async name => {
            let multiWord = await WordCount(name);
            await open(`https://www.youtube.com/results?search_query=${multiWord}`);
            console.log(`la busqueda es: ${multiWord}`);
            console.clear();
            readline.close();
            // preguntar();
            });
    } else if (req === 'te') {
        // Translate english - spanish
        // https://translate.google.com/?hl=es&sl=en&tl=es&text=${}%0A&op=translate
        readline.question('Buscar traducir:', async name => {
            let multiWord = await WordCount(name);
            await open(`https://translate.google.com/?hl=es&sl=en&tl=es&text=${multiWord}%0A&op=translate`);
            // console.log(`la busqueda es: ${multiWord}`);
            console.clear();
            readline.close();
            // preguntar();
            });
    } else if (req === 'ts') {
        // Translate spanish - english
        // https://translate.google.com/?hl=es&sl=en&tl=es&text=${}%0A&op=translate
        readline.question('Buscar traducir:', async name => {
            let multiWord = await WordCount(name);
            await open(`https://translate.google.com/?hl=es&sl=es&tl=en&text=${multiWord}%0A&op=translate`);
            // console.log(`la busqueda es: ${multiWord}`);
            console.clear();
            readline.close();
            // preguntar();
            });
    } else if (req === 'wiki') {
        // Translate spanish - english
        // https://translate.google.com/?hl=es&sl=en&tl=es&text=${}%0A&op=translate
        readline.question('Buscar Wikipedia:', async name => {
            let multiWord = await WordCount(name);
            await open(`https://es.wikipedia.org/wiki/${name}`);
            // console.log(`la busqueda es: ${multiWord}`);
            console.clear();
            readline.close();
            // preguntar();
            });
    } else {
        let multiWord = await WordCount(req);
        await open(`https://www.google.com/search?q=${multiWord}`);
        console.log(`la busqueda es: ${multiWord}`);
        console.clear();
        readline.close();
        // preguntar();
    }

}

export const preguntar = async () => {
    console.log('Preciona 0 para salir');
    await rutas();
    console.log('Ó intriduce un URL');

    readline.question('Buscar: ', name => {
        const nameint = parseInt(name);
        if (isNaN(nameint)) {
            leerString(name);
        } else {
            leer(nameint);
        }
    });
};

const WordCount = async (str: any) => {
    let word = str.split(" ");
    let newWord = [];
    for (let i = 0; i < word.length; i++) {
        newWord.push(word[i]);
        newWord.push('+')
    }

    return newWord.join('');
}

preguntar();