const { count } = require('console');
const open = require('open');
let jsonData = require('./routes.json');

let rutas = {
    rutas: jsonData,
    get getRutas () {
    let count = 0;
    for (let i in rutas.rutas){
        count++;
        console.log(`Preciona ${count} para buscar ${i}`);
    }
}}

let opneNav = (number) => {
    let count = 0;
    for (let i in rutas.rutas){
        count++;
        if (count === number){
            open(`${rutas.rutas[i]}`)
        }
    }
}


let preguntar = () => {
    const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });

    console.log('Preciona 0 para salir');
    rutas.getRutas
    console.log('Ó introduce un URL');

    readline.question('Buscar: ', name => {
        if (name === '0') {
            console.log('adios');
            readline.close();
        }else if(name > 0 && name < count){
            let newname = parseInt(name)
            opneNav(newname);
            readline.close();
            console.clear();
            preguntar();
        }else if(name === 'http'){
            readline.question('Buscar http:', name => {
                open('http://'+name)
                readline.close();
                console.clear()
                preguntar(); 
            });
        }else{
            open('https://'+name)
            readline.close();
            console.clear()
            preguntar();
        }
    })
};


preguntar();