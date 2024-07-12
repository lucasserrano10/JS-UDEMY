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
/*
for(let i = 0; i <= 20; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i)
}*/

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

// função expressão
/*
const media = function calcularMedia(num1,num2,num3){
    let mediaNum = (num1+num2+num3)/3;
    return mediaNum
}

console.log(media(10,15,20))

*/
// arrow function
/*
const mediaDoisNumeros = (num1,num2) => {
    let area = (num1 + num2) / 2
    return area
}

console.log(mediaDoisNumeros(10,100))
*/
// PARAMETRO REST
/*function exibeNumeros(...numeros){
    console.log(numeros)
}

exibeNumeros(2,34,45,3,42)
exibeNumeros(1,2)*/

//array / arranjo

/*const array1 = ['ELEMENTO1', 'ELEMENTO2', 'ELEMENTO3']
array1[3] = 'ELEMENTO4'
console.log(array1)
array1.sort()
console.log(array1)*/



// outros métodos de array
//map
/*const numeros = [10,20,30,40,50]
const novosNumeros = (numeros.map((numero) => numero + 10))
console.log(numeros)
console.log(novosNumeros)
//filter
const numerosGerais = [1,2,4,7,9,13]
const numerosImpares = (numerosGerais.filter((numeros) => numeros % 2 == 1))
console.log(numerosGerais)
console.log(numerosImpares)

//find
const numerosFind = [12,14,64,75]
const novosNumerosFind = numerosFind.find((numero) => numero > 15)
console.log(novosNumerosFind)*/

/*compradoresRifa = ['Lucas', 'Bianca', 'Stephany','João']
let indiceAleatorio = Math.floor(Math.random()*4)
console.log(`O Ganhador da rifa foi ${compradoresRifa[indiceAleatorio]}`)*/

let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;
let avalistas

function cadastraCliente(nomeCliente,sobrenomeCliente,idadeCliente,valorEmprestimoCliente, numAnosCliente, ehBomPagadorCliente, avalistasCliente){
    nome = nomeCliente;
    sobrenome = sobrenomeCliente;
    idade = idadeCliente;
    valorEmprestimo = valorEmprestimoCliente;
    numAnos = numAnosCliente;
    ehBomPagador = ehBomPagadorCliente
    taxaDeJuros = defineTaxa(idadeCliente)
    avalistas = avalistasCliente
}

function defineTaxa(idadeCliente){
    if(idade >= 18 && idade <= 25){
        return 0.09
    }else if(idade >= 26 && idade <= 35){
        return 0.08
    }else if(idade >= 36 && idade <= 50){
        return 0.07
    }else{
        return 0.06
    }
}

cadastraCliente('Manuel','Serrano',90,150000,2,true,['Manuel','Ricardo','Ezildo'])


function adicionaAvalista(avalista){
    avalistas.push(avalista)
}

function removeAvalista(){
    avalistas.pop()
}

function editaAvalista(nomeAvalista,indice){
    avalistas[indice] = nomeAvalista
}

function ordenaAvalista(){
    return avalistas.sort()
}

function exibaAvalista(){
    avalistas.forEach((avalista,indice) => {
        console.log(`${avalista} - ${indice+1}`)
    });
}

adicionaAvalista('André');
adicionaAvalista('Sandra');
adicionaAvalista('Bictor');
removeAvalista();2
editaAvalista('Serrano',0)
console.log(ordenaAvalista(avalistas))
exibaAvalista();

funcionarios = [['Lucas',18,'Estagiário'],['Serrano',23,'Senior dev'],['Rocco',25,'Tech Lead']]

funcionarios.forEach((funcionario,indiceFunc) => {
    funcionario.forEach((colega,indiceColega) => {
        console.log(`O FUNCIONÁRIO ESTÁ NO SETOR ${indiceFunc} - ${colega} - ${indiceColega}`)
    })
});