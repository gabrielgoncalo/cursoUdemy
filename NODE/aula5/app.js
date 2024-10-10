const path = require('path');
const caminhoArq = path.resolve(__dirname, 'teste.json');
const escreve = require('./escrever');

const pessoas = [
    {nome: 'gabriel'},
    {nome: 'joao'},
    {nome: 'seu ze'},

];

const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArq, json);