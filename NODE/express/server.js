const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello world!');
});

app.get('/contato', (req, res) => {
    res.send('Bem vindo a aba contato.')
});

app.listen(3000, ()=>{
    console.log('Acessar: http://localhost');
    console.log('Servidor executando na porta 3000');
});