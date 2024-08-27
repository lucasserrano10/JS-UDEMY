import Hipoteca from "./hipoteca";
import Iterator from "./iterator";

const hipoteca = new Hipoteca('Manuel')
const itens = [1,2,3,4,5,6,'lalal','pijama']
const iterator = new Iterator(itens)

console.log(hipoteca.candidatar(100000))``

for(let item = iterator.primeiro(); iterator.verificaSeguinte(); item = iterator.proximo()){
    console.log(item)
}

console.log('')

iterator.each(function(item){
    console.log(item)
})