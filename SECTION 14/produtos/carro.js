import Produtos from "./produto"
export default class Carro extends Produtos{
    constructor(nome,valor,codigo,tipo){
        super(nome,valor,codigo,tipo)
    }
}