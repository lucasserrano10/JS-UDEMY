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
}

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
}

/*for(let cont = 10; cont >= 1; cont--){
    console.log(cont)
}
console.log('FELIZ ANO NOVO')

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
console.log('FIM DO PROGRAMA')
/*
for(let i = 0; i <= 20; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i)
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
console.log('FIM DO PROGRAMA')

// função expressão
/*
const media = function calcularMedia(num1,num2,num3){
    let mediaNum = (num1+num2+num3)/3;
    return mediaNum
}

console.log(media(10,15,20))


// arrow function

const mediaDoisNumeros = (num1,num2) => {
    let area = (num1 + num2) / 2
    return area
}

console.log(mediaDoisNumeros(10,100))

// PARAMETRO REST
/*function exibeNumeros(...numeros){
    console.log(numeros)
}

exibeNumeros(2,34,45,3,42)
exibeNumeros(1,2)

//array / arranjo

/*const array1 = ['ELEMENTO1', 'ELEMENTO2', 'ELEMENTO3']
array1[3] = 'ELEMENTO4'
console.log(array1)
array1.sort()
console.log(array1)



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
console.log(novosNumerosFind)

/*compradoresRifa = ['Lucas', 'Bianca', 'Stephany','João']
let indiceAleatorio = Math.floor(Math.random()*4)
console.log(`O Ganhador da rifa foi ${compradoresRifa[indiceAleatorio]}`)

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

let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;
let avalistas

function cadastraCliente(nomeCliente,sobrenomeCliente,idadeCliente,valorEmprestimoCliente, numAnosCliente, ehBomPagadorCliente, avalistasCliente){
    cliente = {
        nome : nomeCliente,
        sobrenome : sobrenomeCliente,
        idade : idadeCliente,
        emprestimo: {
            valorEmprestimo: valorEmprestimoCliente,
            numAnos: numAnosCliente,
            ehBomPagador: ehBomPagadorCliente,
            taxaDeJuros: defineTaxa(idadeCliente),
            avalistas: avalistasCliente
        },
        adicionaAvalista: function(avalista){
            this.emprestimo.avalistas.push(avalista)
        },
        removeAvalista: function(){
            this.emprestimo.avalistas.pop()
        },
        editaAvalista: function(nomeAvalista,indice){
            this.emprestimo.avalistas[indice] = nomeAvalista
        },
        ordenaAvalista: function(){
            this.emprestimo.avalistas.sort()
        },
        exibirAvalista: function(){
            this.emprestimo.avalistas.forEach((avalista,indice) => {
                console.log(`O AVALISTA ${indice+1} É O ${avalista}`)
            });
        }
    }
    return cliente
}

const cliente1 = cadastraCliente('Manuel','Serrano',90,150000,2,true,['Manuel','Ricardo','Ezildo'])

function credenciaisInvalidas(mensagem){
    this.nome = 'Credenciais Inválidas'
    this.mensagem = mensagem
}


function adicionaInfLogin(cliente,email,senha){
    if(email.indexOf('@') !== -1 && senha.length > 5){
        cliente.login ={
            email: email,
            senha: senha
        }
        return cliente
    }else{
        throw new credenciaisInvalidas('Os dados são inválidos')
    }
}
try{
    console.log(adicionaInfLogin(cliente1,'edival@gmail.com.br','Neymar22'))
}catch(error){
    console.log(error)
    console.log('nome', error.nome)
}finally{
    console.log('DESEJA REALIZAR UMA NOVA OPERAÇÃO ?')
}

/*console.log(adicionaInfLogin(cliente1,'edival@gmail.com.br','Neymar22'))
console.log(cliente.login.email)

// console.log(Object.entries(cliente))
/*for(const [key,value] of Object.entries(cliente)){
    console.log(`${key} : ${value}`)
}


/*
function adicionaAalista(avalista){
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

/*let email = 'lucasserrano376@gmail.com'
if(email.includes('@') == true){
    console.log('email válido')
}else{
    console.log('Email inválido')
}

// percorrendo strings


function fraseIgualCebolinha(frase){
    let fraseCebolinha = ''
    for(let letra of frase){
        if(letra === 'r'){
            fraseCebolinha += 'l'
        }else{
            fraseCebolinha += letra
        }
    }

    return fraseCebolinha
}

// tratamento de erros em js
// try/catch

/*try{
    let x = X + 20 // SE DERMOS OU NN VALOR CERTO O FINALLY VAI SER EXECUTADO 
    console.log(x)
}catch(error){
    console.log('ERRO')
}finally{
    console.log('FIM DO BLOCO FINALLY')
}

// throw 

function somar(a,b){
    if(typeof a !== 'number'){
        throw TypeError('O primeiro argumento não é um número')
    }
    if(typeof b !== 'number'){
        throw TypeError('O segundo argumento não é um número')
    }
    return a+b
}

try{
    console.log(somar('1',20))
}catch(error){
    console.log(error)
}

//getElementbyId

const paleta1 = document.getElementById("paleta-1")
const paleta2 = document.getElementById("paleta-2")
const paleta3 = document.getElementById("paleta-3")

console.log(paleta1)
console.log(paleta2)
console.log(paleta3)

//getElementbyClassName

const todasPaletas = document.getElementsByClassName('paleta')
console.log(todasPaletas)
console.log(todasPaletas[1])

/*console.log('Harry Potter')
setTimeout(console.log, 1500, 'Toy Story')
console.log('Monsters Inc')
console.log('Avatar')
setTimeout(console.log, 2500, 'Barbie')

function exibeNome(nome){
    const promise = (resolve,reject) => {
        setTimeout(() => {
            if(nome === "Lucas")
                resolve(nome)
            else{
                reject(new Error('Nome inválido !'))
            }
        },3000)
    }
    return new Promise(promise)
}

function exibeSobrenome(){
    console.log('Serrano')
}

async function funcaoAsync(){
try{
    const meuNome = await exibeNome('')
    console.log(meuNome)
    await exibeSobrenome()
    await console.log('Tudo bem ?')
    await console.log('Quantos Anos Voce têm ?')
}catch(erro){
    console.error(erro)
}
}

console.log('Olá,   ')
funcaoAsync()


const stringtest = "Hello World"
const regex = /Hello/
console.log(regex.test(stringtest))


function validarEmail(email){
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(regexEmail.test(email)){
        console.log('EMAIL VÁLIDO')
    }else{
        throw new Error('Email inválido !!')
    }
}

function validaCPF(cpf){
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    if(regexCPF.test(cpf)){
        console.log('CPF VÁLIDO')
    }else{
        throw new Error('CPF inválido !!')
    }
}


validarEmail(prompt('DIGITE SEU EMAIL ->'))
validaCPF(prompt('DIGITE SEU CPF ->'))

/*let produtos = "123242-B \n 5465462-C \n 89574563-R \n 78657463-A \N 87654635-F"
const regex = /[0-9]+[-][A-Z]/
//const resultado = produtos.match(regex)
const resultado = regex.exec(produtos)
console.log(resultado)


class Carro {
    nome;
    cor;
    velocidadeMax;
    velocidadeAtual;

    constructor(nome,cor,velocidadeAtual,velocidadeMax){
        this.nome = nome
        this.cor = cor
        this.velocidadeAtual = velocidadeAtual
        this.velocidadeMax = velocidadeMax
    }

    acelerar(velocidadeAdicional){
        this.velocidadeAtual += velocidadeAdicional
    }
}

const ferrari = new Carro('FERRARI', 'VERMELHO', 320, 260)
const mclaren = new Carro('MCLAREN', 'AMARELO', 310, 240)

console.log(ferrari)
console.log(mclaren)


class Funcionario{
    nome;
    sobrenome;
    idade;
    #cpf;

    constructor(nome,sobrenome,idade,cpf){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.#cpf = cpf
    }

    get cpf(){
        return this.#cpf
    }

    set cpf(novoCpf){
        this.#cpf = novoCpf
    }

    saudacao(){
        console.log(`Olá meu nome é ${this.nome} e meu sobrenome é ${this.sobrenome} e tenho ${this.idade} anos`)
    }
}

class Aluno extends Funcionario{
    #serie
    #turma
    constructor(nome,sobrenome,idade,cpf,serie,turma){
        super(nome,sobrenome,idade,cpf)
        this.#serie = serie
        this.#turma = turma
    }

    get serie(){
        return this.#serie
    }

    saudacao(){
        console.log(`Olá, Meu nome é ${this.nome}, e faço ${this.#serie} ${this.turma}`)
    }
}


class Professor extends Funcionario{
    #disciplina
    #horas
    constructor(nome,sobrenome,idade,cpf,disciplina,horas){
        super(nome,sobrenome,idade,cpf)
        this.#disciplina = disciplina
        this.#horas = horas
    }

    get disciplina(){
        return this.#disciplina
    }

    saudacao(){
        console.log(`Olá meu nome é ${this.nome} e sou professor de ${this.#disciplina}`)
    }
}

const professor1 = new Professor('Arnaldo', 'Coelho', 76, 23443254312, 'Historia', 46)
console.log(professor1)
professor1.saudacao()
const aluno1 = new Aluno('Joaquim', 'Ramal', 16, 12342343422,3,'A-2')
console.log(aluno1)
aluno1.saudacao()


class Pessoa{
    nome;
    constructor(nome){
        this.nome = nome
    }
    saudar(){
        console.log(`Ola, meu nome é ${this.nome}`)
    }
}

class Professor{
    constructor(pessoa,disciplina){
        this.pessoa = pessoa
        this.nome = pessoa.nome
        this.disciplina = disciplina
    }

    saudar(){
        console.log(`Olá meu nome é ${this.nome}, sou professor de ${this.disciplina}`)
    }
}

const pessoa = new Pessoa('Manuel')

const professor = new Professor(pessoa, 'programação')
professor.saudar()
*/