import express from "express";
import { Request, Response } from "express";
import { IProductListFilters } from "../../IProduct";

const router = express.Router();

/**
 * 
 *  APIs de Produto
 * 
 */
//Array de produtos
const products =[
    {
        id: 1,
        name: "Feijão Carioca",
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
router.get("/:id", (req: Request, res: Response) => {
    console.log(req.params.id);
    
    const product = products.find((product) => {
        return product.id = Number(req.params.id)
    });

    if(!product){
        res.status(404).send();
        return;
    }    
    res.status(200).json(product);
});

//Rota que retorna uma lista de produtos no path /product/:id
router.get("/", (req: Request, res: Response) => {
    console.log(req.query);
    /**
     *  TODO: implementar busca pelos filtros, name, brand, supplier, stockId
     *  TODO:
     *  TODO:
     */

    const productFilters = req.query as unknown as IProductListFilters;

    const { 
        name: nameFilter, 
        brand: brandFilter, 
        supplier: supplierFilter, 
        stockId: sotckFilter 
    } = productFilters;
    
    const foundProducts = products.filter(({name, brand, supplier, stockId}) => {
        if (!(nameFilter || brandFilter || supplierFilter || sotckFilter))
            return true;

        if (nameFilter && name.toUpperCase().includes(nameFilter?.toUpperCase()))
            return true;

        if (brandFilter && brand.toUpperCase().includes(brandFilter?.toUpperCase()))
            return true;
        
        //brand.toUpperCase()
        //supplier.toUpperCase()
        //stockId
        return false;
 });    

 res.status(200).json(foundProducts);
});

router.post("/", (req: Request, res: Response) => {
    const product = req.body;
    products.push(product);
    //retorna status http 404 - "Não encontrado", pois produto não foi encontrado
    res.status(201).send();
})


router.delete("/:id", (req: Request, res: Response) => {

})

//router.put("/:id", (req:))

export default router;
