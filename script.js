let nome = 'Manuel';
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