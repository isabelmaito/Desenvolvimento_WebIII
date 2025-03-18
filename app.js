//Importação da biblioteca express
const express = require('express');

//Criação da aplicação 
const app = express();

//Define método Http Get que responde no path /
app.get("/", (req, res) => {
    //Responde requisição com "Hello World!"
    res.send("Hello World!");
});

//Define método Http Post que responde no path /
app.post("/", (req, res) => {
    //Responde requisição com "Hello World Again"
    res.send("Hello World Again");
});

//Inicia aplicação na porta 3000
app.listen(3000, () => {
    console.log("Servidor executando na Porta 3000");
});