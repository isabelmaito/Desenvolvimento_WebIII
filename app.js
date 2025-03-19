//Importação da biblioteca express
const express = require('express');

//Criação da aplicação "criação": unknow word.
const app = express();

//Configura aplicação para receber json no body das requisições
app.use(express.json());

//Array de produtos
const products =[
    {
        id: 1,
        name: "Feijão",
        brand: "Broto Legal",
        barCode: "98327279823749327492732",
        supplier: "Rede de Distribuição Ltda",
        stockId: 98,
        price: 8.79,
        weight: 1,
        measureUnit: "Kg"
    },
    {
        id: 2,
        name: "Arroz",
        brand: "Tio João",
        barCode: "7538745983750290298430923",
        supplier: "Rede de Distribuição Ltda",
        stockId: 65,
        price: 2.99,
        weight: 5,
        measureUnit:"Kg"    
    },
]

//Define método Http Get que responde no path /product/:id
app.get("/product/:id", (req, res) => {
    console.log(req.params.id);
    
    const product = products.find((product) => {
        return products.id = Number(req.params.id)
    })

    //Responde requisição com "Hello World!"
    res.status(200).json(product);
});

//Rota que retorna uma lista de produtos no path /product/:id
app.get("/product", (req, res) => {
    res.status(200).json(products);
});

app.post("/product", (req, res) => {
    const product = req.body;
    products.push(product);

    res.status(201).send();
})

//Inicia aplicação na porta 3000
app.listen(3000, () => {
    console.log("Servidor executando na Porta 3000");
});