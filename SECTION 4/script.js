console.log('LOJA QUASE DOIS - SISTEMA DE SUPERMERCADO')

for(let i = 1; i <= 50; i++){
    console.log(`${i} - ${parseInt(Math.random()*20)}R$`)
}

console.log('SISTEMA DE METEOROLOGIA');
let i = 0;
let somaTemperatura = 0;
while(true){
    temperatura = parseInt(prompt('INFORME A TEMPERATURA'))
    if(temperatura == 0){
        break
    }
    console.log(temperatura)
    somaTemperatura += temperatura
    i++
}
let media = somaTemperatura / i
console.log(`A MÉDIA DAS TEMPERATURAS INFORMADAS FORAM ${media} Graus Celsius`)
