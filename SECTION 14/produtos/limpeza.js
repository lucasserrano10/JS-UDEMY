import Produtos from "./produto.js"

export default class Limpeza extends Produtos{
    constructor(nome,valor,codigo,tipo){
        super(nome,valor,codigo,tipo);
    }
}