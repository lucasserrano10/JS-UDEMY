const form = document.forms.cadastro;
const mensagemErro = document.querySelector("#mensagemErro");
const {nome, celular, cpf, email, senha, confirmaSenha, numCartao, codigoSeg, dataValidade} = form;

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    validaFormulario();
})

function validaNome(){
    const regex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/
    if(regex.test(nome.value)){
        console.log(nome.value); 
    }else{
        throw new Error("Nome e Sobrenome inválidos");
    }
}

function validaCelular(){
    const regex = /^\(\d{2,3}\) 9\d{4}-\d{4}$/;
    if(regex.test(celular.value)){
        console.log(celular.value);
    }else{
        throw new Error("Celular inválido");
    }
}

function validaCPF(){
    const regex = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/
    if(regex.test(cpf.value)){
        console.log(cpf.value);
    }else{
        throw new Error("CPF inválido");
    }
}

function validaEmail(){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regex.test(email.value)){
        console.log(email.value);
    }else{
        throw new Error("Email inválido");
    }
}

function validaSenha(){
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ;
    if(regex.test(senha.value)){
        console.log(senha.value);
    }else{
        throw new Error("Senha inválida");
    }
}

function validaConfirmaSenha(){
    if(confirmaSenha.value === senha.value){
        console.log(confirmaSenha.value);
    }else{
        throw new Error("As senhas não são semelhantes");
    }
}

function validaCartao(){
    const regex = /^\d{13,19}$/;
    if(regex.test(numCartao.value)){
        console.log(numCartao.value);
    }else{
        throw new Error("Numero de cartão inválido");
    }
}

function validaData(){
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if(regex.test(dataValidade.value)){
        console.log(dataValidade.value);
    }else{
        throw new Error("Data de validade do cartão inválida");
    }
}

function validaCodigo(){
    const regex = /^\d{3,4}$/;
    if(regex.test(codigoSeg.value)){
        console.log(codigoSeg.value);
    }else{
        throw new Error("Códigoo de segurança inválido");
    }
}

function limparInputs(){
    const inputs = document.querySelectorAll(".formulario input")
    inputs.forEach(function(input){
        input.value = ''
    })
}


function validaFormulario(){
    try{
        validaNome()
        validaCelular()
        validaCPF()
        validaEmail()
        validaSenha()
        validaConfirmaSenha()
        validaCartao()
        validaData()
        validaCodigo()
        alert("Dados cadastrados com sucesso!!");
        limparInputs()
    }catch(erro){
        mensagemErro.innerHTML = erro.message;
    }
}