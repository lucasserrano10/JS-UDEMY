/*let nome = 'Manuel';
let sobrenome = 'Serrano';
let idade = 45;
const idCliente = 37289642;

console.log(` Nome: ${nome} \n Sobrenome: ${sobrenome} \n Idade: ${idade} \n ID: ${idCliente}`);

let valorEmprestimo = 150000;
let taxaJuros = 0.10;
let bomPagador = 'SIM';
let numAnos = 5
bomPagador = true;

let juros = valorEmprestimo * taxaJuros * numAnos
let montante = valorEmprestimo + juros

console.log(`Juros - > ${juros}, Montante - > ${montante}`)


let numeroPizzas = 3
numeroPizzas++
console.log(numeroPizzas)

let tenisA = 'Adidas'
let tenisB = 'Nike'
console.log(tenisA < tenisB)


let condicao = 350
let valorTotal = 750
if(valorTotal >= condicao){
    console.log('FRÉTE GRÁTIS')
}else{
    console.log('FRETE DE 25 R$')
}*/

/*let nome = 'Manuel';
let sobrenome = 'Serrano';
let idade = 18;
const idCliente = 37289642;

console.log(` Nome: ${nome} \n Sobrenome: ${sobrenome} \n Idade: ${idade} \n ID: ${idCliente}`);

let valorEmprestimo = 150000;
let taxaJuros = 0.10;
let bomPagador = 'SIM';
let numAnos = 5
bomPagador = true;


if(idade >= 18 && idade <= 25){
    taxaJuros = 0.09
}else if(idade >= 26 && idade <= 35){
    taxaJuros = 0.08
}else if(idade >= 36 && idade <= 50){
    taxaJuros = 0.07
}else{
    taxaJuros = 0.06
}

let juros = valorEmprestimo * taxaJuros * numAnos
let montante = valorEmprestimo + juros

console.log(`Juros - > ${juros}, Montante - > ${montante}`)
*/

/*let cargo = 'Arquiteto';

switch(cargo){
    case 'Junior':
        console.log('O Programador Junior Recebe 4000R$')
        break;
    case 'Pleno':
        console.log('O Programador Pleno Recebe 6000R$')
        break;
    case 'Sênior':
        console.log('O Programador Sênior Recebe 10000R$')
        break;
    case 'Arquiteto':
        console.log('O Arquiteto de Software Recebe 15000R$')
        break;
    default:
        console.log('Escolha um Cargo')
        break;
}
*/
/*let emailValido = false 
let senhaValida = true
let validacao = emailValido ? (senhaValida ? 'CREDENCIAIS VÁLIDAS' : 'SENHA INVÁLIDA') : 'EMAIL INVÁLIDO'

console.log(validacao)


function a(){
    x = 10
    console.log(x)
}

function b(){
    x = 100
    console.log(x)
}

for(let cont = 1; cont <= 50; cont++){
    console.log(cont)
}*/

/*for(let cont = 10; cont >= 1; cont--){
    console.log(cont)
}
console.log('FELIZ ANO NOVO')*/

/*
let nome = 'Manuel';
let sobrenome = 'Serrano';
let idade = 18;
const idCliente = 37289642;

console.log(` Nome: ${nome} \n Sobrenome: ${sobrenome} \n Idade: ${idade} \n ID: ${idCliente}`);

let valorEmprestimo = 150000;
let taxaJuros = 0.10;
let bomPagador = 'SIM';
let numAnos = 5
bomPagador = true;


if(idade >= 18 && idade <= 25){
    taxaJuros = 0.09
}else if(idade >= 26 && idade <= 35){
    taxaJuros = 0.08
}else if(idade >= 36 && idade <= 50){
    taxaJuros = 0.07
}else{
    taxaJuros = 0.06
}

while(valorEmprestimo != 0){
    valorEmprestimo = parseInt(prompt('Digite O Valor do Empréstimo ->'))
    if(valorEmprestimo == 0){
        break
    }
    numAnos = parseInt(prompt('Digite o Número de Anos - >'))
    let juros = valorEmprestimo * taxaJuros * numAnos
    let montante = valorEmprestimo + juros
    console.log(`Juros - > ${juros}, Montante - > ${montante}`)
}
console.log('FIM DO PROGRAMA')*/

for(let i = 0; i <= 20; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i)
}

function defineTaxa(idadeCliente){
    if(idade >= 18 && idade <= 25){
        return  0.09
    }else if(idade >= 26 && idade <= 35){
        return 0.08
    }else if(idade >= 36 && idade <= 50){
        return 0.07
    }else{
        return 0.06
    }  
}  

function cadastrarClientes(nomeCliente,sobrenomeCliente,idadeCliente,valorEmprestimoCliente,bomPagadorCliente,numAnosCliente){
    console.log(`${nomeCliente} ${sobrenomeCliente} de ${idadeCliente} o valor do seu empréstimo é de ${valorEmprestimoCliente}R$, sua reputação é de ${bomPagadorCliente} e você irá pagar em ${numAnosCliente}`)
    taxaJuros = defineTaxa(idadeCliente)
    console.log(`SUA TAXA DE JUROS É DE ${taxaJuros}`)
}
/*
console.log(` Nome: ${nome} \n Sobrenome: ${sobrenome} \n Idade: ${idade}`);

while(valorEmprestimo != 0){
    valorEmprestimo = parseInt(prompt('Digite O Valor do Empréstimo ->'))
    if(valorEmprestimo == 0){
        break
    }
    numAnos = parseInt(prompt('Digite o Número de Anos - >'))
    let juros = valorEmprestimo * taxaJuros * numAnos
    let montante = valorEmprestimo + juros
    console.log(`Juros - > ${juros}, Montante - > ${montante}`)
}
console.log('FIM DO PROGRAMA')*/

cadastrarClientes('LUCAS','SERRANO',18,150000,true,2)
