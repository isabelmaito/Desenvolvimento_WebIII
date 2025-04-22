import { Request, Response } from "express";
import  ProductRoutes  from "./src/routes/product.routes";
import BrandRoutes from "./src/routes/brand.routes";


//Importação da biblioteca express
const express = require('express');

//Criação da aplicação "criação": unknow word.
const app = express();

//Configura aplicação para receber json no body das requisições
app.use(express.json());

//routes
app.use('/product', ProductRoutes);
app.use('/brand', BrandRoutes);


//Inicia aplicação na porta 3000
app.listen(3000, () => {
    console.log("Servidor executando na Porta 3000");
});






