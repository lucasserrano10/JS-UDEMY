const usuario = {
    nome: 'José',
    email: 'josearlindo11@gmail.com',
    senha: 'jose123'
}

function ocultarSenha(senha){
    let senhaAux = ''
    for(let i = 0; i <= senha.length; i++){
        senhaAux += '*'
    }
    return senhaAux
}

usuario.senha = ocultarSenha(usuario.senha)

console.log(usuario)

// ocultando senha do usuario no objeto